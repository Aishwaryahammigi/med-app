let selectedDistance = 10;

const medicines = [
  { name: "Paracetamol", shop: "Apollo Pharmacy", distance: 2, price: 25, lat: 12.9716, lng: 77.5946 },
  { name: "Crocin", shop: "MedPlus", distance: 5, price: 30, lat: 12.9750, lng: 77.6000 },
  { name: "Dolo 650", shop: "HealthCare Store", distance: 8, price: 35, lat: 12.9800, lng: 77.6100 },
  { name: "Aspirin", shop: "Wellness Pharmacy", distance: 3, price: 20, lat: 12.9680, lng: 77.5900 }
];

// Initialize map
let map = L.map('map').setView([12.9716, 77.5946], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

let markers = [];

function filterDistance(d) {
  selectedDistance = d;
  alert("Filter set to " + d + " km");
}

function searchMedicine() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  const loader = document.getElementById("loader");

  resultsDiv.innerHTML = "";
  loader.classList.remove("hidden");

  setTimeout(() => {
    loader.classList.add("hidden");

    const filtered = medicines.filter(m =>
      m.name.toLowerCase().includes(input) &&
      m.distance <= selectedDistance
    );

    // Clear old markers
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    if (filtered.length === 0) {
      resultsDiv.innerHTML = "<p>No medicines found</p>";
      return;
    }

    filtered.forEach(m => {
      // UI Card
      resultsDiv.innerHTML += `
        <div class="card">
          <h3>${m.name}</h3>
          <p>🏥 ${m.shop}</p>
          <p>📍 ${m.distance} km away</p>
          <p>💰 ₹${m.price}</p>
        </div>
      `;

      // Map Marker
      const marker = L.marker([m.lat, m.lng])
        .addTo(map)
        .bindPopup(`<b>${m.name}</b><br>${m.shop}`);

      markers.push(marker);
    });

  }, 1000);
}