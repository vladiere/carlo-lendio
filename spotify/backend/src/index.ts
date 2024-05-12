import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";

import indexRoute from "./routes/index";
import authRoute from "./routes/auth.routes";
import spotifyRoutes from "./routes/spotify.routes";

const app: Express = express();
const PORT: number = Number(process.env.PORT) || 3010;

const corsOptions = {
  origin: 'http://localhost:5173',
  optionSuccessStatus: 200,
}

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use(bodyParser.json());

app.use('/api', indexRoute);
app.use('/api', authRoute);
app.use('/api/spotify', spotifyRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  return res.status(404).json({
    message: error.message
  });
});

app.listen(PORT, () => {
  console.info(`\n\nServer is listening on http://localhost:${PORT}`)
})

export default app;
