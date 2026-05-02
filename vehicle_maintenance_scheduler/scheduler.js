const Log = require("../logging_middleware/logger");

let vehicles = [];

// Add vehicle
function addVehicle(name, lastServiceDate) {
  vehicles.push({ name, lastServiceDate });

  Log("backend", "info", "service", `Vehicle ${name} added`);
}

// Check maintenance
function checkMaintenance() {
  const today = new Date();

  vehicles.forEach(vehicle => {
    const last = new Date(vehicle.lastServiceDate);
    const diff = (today - last) / (1000 * 60 * 60 * 24);

    if (diff > 30) {
      Log("backend", "warn", "service", `${vehicle.name} needs maintenance`);
      console.log(`${vehicle.name} needs maintenance`);
    }
  });
}

module.exports = {
  addVehicle,
  checkMaintenance
};