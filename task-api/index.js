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



app.listen(3001, () => {    
    console.log("Server running on port 3001");
});