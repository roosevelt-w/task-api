const express = require("express")
const pool = require("./db");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ status: "OK" });
});

app.get("/tasks", async (req, res) => {
    res.json([]);
}); 

app.post("/tasks", async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || typeof title !== "string" || title.trim().length === 0) {
      return res.status(400).json({ error: "Title is required" });
    }

    const result = await pool.query(
      "INSERT INTO tasks (title) VALUES ($1) RETURNING *;",
      [title.trim()]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create task" });
  }
});

app.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    if (title !== undefined && (typeof title !== "string" || title.trim() === "")) {
      return res.status(400).json({ error: "If provided, title must be a non-empty string" });
    }

    if (completed !== undefined && typeof completed !== "boolean") {
      return res.status(400).json({ error: "If provided, completed must be true or false" });
    }

    const result = await pool.query(
      `UPDATE tasks
       SET title = COALESCE($1, title),
           completed = COALESCE($2, completed)
       WHERE id = $3
       RETURNING *;`,
      [title !== undefined ? title.trim() : null, completed !== undefined ? completed : null, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update task" });
  }
});


app.listen(3001, () => {    
    console.log("Server running on port 3001");
});

