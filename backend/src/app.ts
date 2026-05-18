import express from "express";
import userRouters from "./routes/userRoutes";
import messageRouters from "./routes/messageRoutes";
import chatRouters from "./routes/chatRoutes";
import authRouters from "./routes/authRoutes";

const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Service is running" });
});

app.use(express.json());

app.use("/api/auth", authRouters);
app.use("/api/chats", chatRouters);
app.use("/api/messages", messageRouters);
app.use("/api/users", userRouters);

export default app;
