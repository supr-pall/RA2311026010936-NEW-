const Log = require("../../logging_middleware/logger");

let notifications = [];

// POST
exports.sendNotification = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      await Log("backend", "error", "controller", "Message missing");
      return res.status(400).json({ error: "Message required" });
    }

    const data = {
      id: Date.now(),
      message
    };

    notifications.push(data);

    await Log("backend", "info", "controller", "Notification created");

    res.json(data);

  } catch (err) {
    await Log("backend", "fatal", "controller", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// GET
exports.getNotifications = async (req, res) => {
  try {
    await Log("backend", "info", "controller", "Fetching notifications");
    res.json(notifications);
  } catch (err) {
    await Log("backend", "error", "controller", err.message);
    res.status(500).json({ error: "Error fetching" });
  }
};