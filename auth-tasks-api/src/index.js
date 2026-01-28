require("dotenv").config();
const express = require("express");

const authRoutes = require("./routes/auth");
const tasksRoutes = require("./routes/tasks");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/auth", authRoutes);
app.use("/tasks", tasksRoutes);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
