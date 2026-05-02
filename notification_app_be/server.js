const express = require("express");
const app = express();

app.use(express.json());

const routes = require("./routes/notificationRoutes");
app.use("/api", routes);

// optional scheduler test
const scheduler = require("../vehicle_maintenance_scheduler/scheduler");
scheduler.addVehicle("Car1", "2024-01-01");
scheduler.checkMaintenance();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});