import { io, Socket } from 'socket.io-client';

const socket: Socket = io.connect('http://localhost:4545');

export default socket;
