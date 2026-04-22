let selectedDistance = 10;

const medicines = [
  { name: "Paracetamol", shop: "Apollo Pharmacy", distance: 2, price: 25 },
  { name: "Crocin", shop: "MedPlus", distance: 5, price: 30 },
  { name: "Dolo 650", shop: "HealthCare Store", distance: 8, price: 35 },
  { name: "Aspirin", shop: "Wellness Pharmacy", distance: 3, price: 20 }
];

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

    if (filtered.length === 0) {
      resultsDiv.innerHTML = "<p>No medicines found</p>";
      return;
    }

    filtered.forEach(m => {
      resultsDiv.innerHTML += `
        <div class="card">
          <h3>${m.name}</h3>
          <p>🏥 ${m.shop}</p>
          <p>📍 ${m.distance} km away</p>
          <p>💰 ₹${m.price}</p>
        </div>
      `;
    });

  }, 1000);
}