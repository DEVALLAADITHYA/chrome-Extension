const express = require("express");
const router = express.Router();
const TimeLog = require("C:/Users/adith/Downloads/CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS-4-main/server/models/TimeLog.js");

// POST /api/log
router.post("/log", async (req, res) => {
  const { url, duration } = req.body;
  console.log(`Logging time for URL: ${url}, Duration: ${duration}`);

  // Insert into MongoDB
  const newLog = new TimeLog({ url, duration });
  try {
    await newLog.save();
    res.status(200).send({ message: "Time logged successfully!" });
  } catch (err) {
    res.status(400).send({ message: "Error logging time", error: err });
  }
});

module.exports = router;
