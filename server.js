const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Faculty CV Backend Running");
});

// API Route
app.post("/submit-cv", (req, res) => {
  console.log(req.body);

  res.json({
    message: "CV submitted successfully",
    data: req.body,
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});