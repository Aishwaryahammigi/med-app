let selectedDistance = 10;

// Dummy medicine data
const medicines = [
  { name: "Paracetamol", shop: "Apollo Pharmacy", distance: 2, price: 25 },
  { name: "Crocin", shop: "MedPlus", distance: 5, price: 30 },
  { name: "Dolo 650", shop: "1mg Store", distance: 8, price: 35 },
  { name: "Aspirin", shop: "HealthCare Pharmacy", distance: 3, price: 20 }
];

// Set filter
function filterDistance(d) {
  selectedDistance = d;
  alert("Filter set to " + d + " km");
}

// Search function
function searchMedicine() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  const loader = document.getElementById("loader");

  resultsDiv.innerHTML = "";
  loader.classList.remove("hidden");

  setTimeout(() => {
    loader.classList.add("hidden");

    const filtered = medicines.filter(med =>
      med.name.toLowerCase().includes(input) &&
      med.distance <= selectedDistance
    );

    if (filtered.length === 0) {
      resultsDiv.innerHTML = "<p class='empty'>❌ No medicines found</p>";
      return;
    }

    filtered.forEach(med => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${med.name}</h3>
        <p>📍 ${med.shop} (${med.distance} km)</p>
        <p>💰 ₹${med.price}</p>
        <button onclick="saveMedicine('${med.name}')">❤️ Save</button>
      `;

      resultsDiv.appendChild(card);
    });

  }, 1000);
}

// Save feature
function saveMedicine(name) {
  alert(name + " saved!");
}