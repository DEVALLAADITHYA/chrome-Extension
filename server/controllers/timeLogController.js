const TimeLog = require('D:/time-tracker-extension/server/models/timeLog.js');

// Insert a new time log
exports.insertTimeLog = async (req, res) => {
  const { site, timeSpent } = req.body;
  const newTimeLog = new TimeLog({
    site,
    timeSpent,
    date: new Date(),
  });

  try {
    await newTimeLog.save();
    res.status(200).send('Time log inserted');
  } catch (err) {
    res.status(400).send('Error inserting time log');
  }
};

// Fetch all time logs
exports.getTimeLogs = async (req, res) => {
  try {
    const timeLogs = await TimeLog.find();
    res.status(200).json(timeLogs);
  } catch (err) {
    res.status(400).send('Error fetching time logs');
  }
};
