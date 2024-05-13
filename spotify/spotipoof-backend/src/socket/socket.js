/**
 *@license Apache-2.0/MIT
 *@copyright vladiere
 */

'use-strict';

import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: "*",
	},
});

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

const messageSocketMap = {}; // {userId: socketId, msg: massage}
const messages = [] // { socketId, username, user_id, timestamp, message }

io.on("connection", (socket) => {
	console.log("a user connected", socket.id);
  io.emit('get_socketId', socket.id);

  socket.on('user_connected', data => {
    io.emit('new_user', data);
  })

  socket.on('send_message', (data) => {
    messages.push(data);
    console.log(messages);
    io.emit('get_message', messages);
  });

  io.emit('messages', messages)

	// io.emit() is used to send events to all the connected clients
	// io.emit("getOnlineUsers", Object.keys(userSocketMap));
	//
	// socket.on() is used to listen to the events. can be used both on client and server side
	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
	});
});

export { app, io, server };
