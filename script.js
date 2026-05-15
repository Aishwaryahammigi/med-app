let selectedDistance = 10;

const medicines = [
  { name: "Paracetamol", shop: "Apollo Pharmacy", distance: 2, price: 25, lat: 12.9716, lng: 77.5946 },
  { name: "Crocin", shop: "MedPlus", distance: 5, price: 30, lat: 12.9750, lng: 77.6000 },
  { name: "Dolo 650", shop: "HealthCare Store", distance: 8, price: 35, lat: 12.9800, lng: 77.6100 },
  { name: "Aspirin", shop: "Wellness Pharmacy", distance: 3, price: 20, lat: 12.9680, lng: 77.5900 },
  { name: "Ibuprofen", shop: "Apollo Pharmacy", distance: 4, price: 40, lat: 12.9720, lng: 77.5960 },
  { name: "Amoxicillin", shop: "MedPlus", distance: 6, price: 85, lat: 12.9760, lng: 77.6020 },
  { name: "Cetirizine", shop: "1mg Store", distance: 2, price: 15, lat: 12.9700, lng: 77.5930 },
  { name: "Metformin", shop: "HealthCare Store", distance: 7, price: 45, lat: 12.9810, lng: 77.6120 },
  { name: "Omeprazole", shop: "Wellness Pharmacy", distance: 3, price: 55, lat: 12.9690, lng: 77.5910 },
  { name: "Azithromycin", shop: "Apollo Pharmacy", distance: 5, price: 120, lat: 12.9730, lng: 77.5970 },
  { name: "Vitamin D3", shop: "MedPlus", distance: 4, price: 200, lat: 12.9740, lng: 77.5980 },
  { name: "Pantoprazole", shop: "1mg Store", distance: 6, price: 65, lat: 12.9770, lng: 77.6030 }
];

// Initialize map
let map = L.map('map').setView([12.9716, 77.5946], 13);

// Detect user location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    map.setView([lat, lng], 13);
  }, function() {
    // If user denies location, keep Bangalore as default
    map.setView([12.9716, 77.5946], 13);
  });
}

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

let markers = [];

function filterDistance(d) {
  selectedDistance = d;
  document.querySelectorAll('.filters button').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
}

function showSuggestions() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const suggestionBox = document.getElementById("suggestions");
  suggestionBox.innerHTML = "";

  if (input.length === 0) {
    suggestionBox.style.display = "none";
    return;
  }

  const matched = medicines.filter(m => 
    m.name.toLowerCase().startsWith(input)
  );

  if (matched.length === 0) {
    suggestionBox.style.display = "none";
    return;
  }

  suggestionBox.style.display = "block";
  matched.forEach(m => {
    const div = document.createElement("div");
    div.textContent = m.name;
    div.onclick = () => {
      document.getElementById("searchInput").value = m.name;
      suggestionBox.style.display = "none";
      searchMedicine();
    };
    suggestionBox.appendChild(div);
  });
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

    markers.forEach(m => map.removeLayer(m));
    markers = [];

    if (filtered.length === 0) {
      resultsDiv.innerHTML = "<p>No medicines found</p>";
      return;
    }

    const sortBy = document.getElementById("sortBy").value;
    if (sortBy === "price") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "distance") {
      filtered.sort((a, b) => a.distance - b.distance);
    }

    resultsDiv.innerHTML = `<p class="result-count">Found ${filtered.length} medicine(s)</p>`;

    filtered.forEach(m => {
      resultsDiv.innerHTML += `
        <div class="card">
          <h3>${m.name} <span class="badge ${m.distance <= 3 ? 'in-stock' : 'out-stock'}">${m.distance <= 3 ? 'In Stock' : 'Out of Stock'}</span></h3>
          <p>Shop: ${m.shop}</p>
          <p>Distance: ${m.distance} km away</p>
          <p>Price: Rs.${m.price}</p>
        </div>
      `;

      const marker = L.marker([m.lat, m.lng])
        .addTo(map)
        .bindPopup(`<b>${m.name}</b><br>${m.shop}`);

      markers.push(marker);
    });

  }, 1000);
}