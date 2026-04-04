import http from "http";
import app from "./app.js";
import { Server } from "socket.io";

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Client connected");
});

global.io = io;

server.listen(5000, () => console.log("Server running"));
