const express = require("express");
const mysql = require("mysql2");

const app = express();

// RDS connection config
const db = mysql.createConnection({
  host: "database-1.cxaeu0e464x8.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "k9g6PVqeYMdBfJb",
  database: "database_1"
});
db.connect((err) => {
  if (err) {
    console.error("DB connection failed:", err);
  } else {
    console.log("Connected to RDS MySQL ✅");
  }
});

// INSERT API
app.post("/add-user", (req, res) => {
  const { name } = req.body;

  const sql = "INSERT INTO users (name) VALUES (?)";

  db.query(sql, [name], (err, result) => {
    if (err) {
      return res.send("Error inserting data");
    }
    res.send("User added successfully ✅");
  });
});

// GET API (to verify)
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.send("Error fetching users");
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

