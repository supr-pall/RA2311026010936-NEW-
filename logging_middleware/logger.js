const axios = require("axios");

const LOG_API = "http://20.207.122.201/evaluation-service/logs";

// 🔴 PASTE YOUR VALUES HERE
const clientID = "e059e24e-b847-495b-bc7e-d56d3ed3e9ed";
const clientSecret = "dPwaREbWGQBAkeyf";

async function Log(stack, level, pkg, message) {
  try {
    await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          clientID,
          clientSecret
        }
      }
    );
  } catch (err) {
    console.error("Log failed:", err.message);
  }
}

module.exports = Log;
