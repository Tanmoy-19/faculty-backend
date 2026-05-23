const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "https://faculty-cv-system.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/submit-cv", (req, res) => {
  console.log(req.body);

  res.status(200).json({
    message: "CV submitted successfully",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});