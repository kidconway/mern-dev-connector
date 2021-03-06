const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3791;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

app.listen(PORT, () =>
  console.log(`One server to rule them all running on port ${PORT}`)
);
