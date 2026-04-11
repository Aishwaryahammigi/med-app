const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Serve frontend files
app.use(express.static(__dirname));

// Medicine data
const medicines = {
  paracetamol: {
    available: true,
    shops: ["Apollo Pharmacy", "MedPlus", "Wellness Forever"]
  },
  dolo: {
    available: false,
    alternative: "paracetamol"
  },
  crocin: {
    available: true,
    shops: ["24/7 Pharmacy", "HealthCare Store"]
  },
  ibuprofen: {
    available: true,
    shops: ["MedPlus", "Apollo Pharmacy"]
  },
  aspirin: {
    available: false,
    alternative: "ibuprofen"
  }
};

// Home route (serves UI)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Search API
app.get("/search", (req, res) => {
  const name = req.query.name?.toLowerCase();

  if (!name) {
    return res.json({
      status: "error",
      message: "Please provide a medicine name ⚠️"
    });
  }

  const med = medicines[name];

  if (!med) {
    return res.json({
      status: "not_found",
      message: "Medicine not found in database ❌"
    });
  }

  if (med.available) {
    return res.json({
      status: "available",
      message: `Available at: ${med.shops.join(", ")}`
    });
  }

  if (!med.available && med.alternative) {
    const alt = medicines[med.alternative];

    return res.json({
      status: "alternative",
      message: `Not available ❌. Alternative: ${med.alternative} available at ${alt.shops.join(", ")}`
    });
  }

  return res.json({
    status: "unavailable",
    message: "Medicine not available ❌"
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});