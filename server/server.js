const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const timeRoutes = require("./routes/api"); // Ensure correct path to api.js
const TimeLog = require("C:/Users/adith/Downloads/CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS-4-main/server/models/TimeLog.js");

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/timeTracker")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));

// Use the API routes
app.use("/api", timeRoutes);

// API endpoint to fetch logged data
app.get("/api/logs", async (req, res) => {
  try {
    const TimeLog = mongoose.model("TimeLog"); // Ensure TimeLog schema is registered
    const logs = await TimeLog.find();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch logs" });
  }
});

// Default route for serving the frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
