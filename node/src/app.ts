import "dotenv/config";
import cors from "cors";
import express from "express";
import http from "http";
import socketIo from "socket.io";
import { router } from "./routes";

const app = express();
app.use(cors());

const serverHttp = http.createServer(app);

const io = new socketIo.Server(serverHttp, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log(`User connected on socket ${socket.id}`);
});

app.use(express.json());

app.use(router);

app.get("/", (request, response) => {
  response.json({ server: "✅ Server is running" });
});

app.get("/github", (request, response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

app.get("/signin/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

export { serverHttp, io };
