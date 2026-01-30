const express = require("express");
const pool = require("../db");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * GET tasks (protected)
 */
router.get("/", authMiddleware, async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM tasks WHERE user_id = $1",
    [req.userId]
  );
  res.json(result.rows);
});

/**
 * CREATE task (protected)
 */
router.post("/", authMiddleware, async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title required" });
  }

  const result = await pool.query(
    "INSERT INTO tasks (user_id, title) VALUES ($1, $2) RETURNING *",
    [req.userId, title]
  );

  res.status(201).json(result.rows[0]);
});

module.exports = router;
