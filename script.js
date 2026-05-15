let selectedDistance = 10;

const medicines = [
  { name: "Paracetamol", shop: "Apollo Pharmacy", distance: 2, price: 25, lat: 15.8497, lng: 74.4977, inStock: true },
  { name: "Crocin", shop: "MedPlus", distance: 5, price: 30, lat: 15.8520, lng: 74.5010, inStock: true },
  { name: "Dolo 650", shop: "HealthCare Store", distance: 8, price: 35, lat: 15.8560, lng: 74.5060, inStock: true },
  { name: "Aspirin", shop: "Wellness Pharmacy", distance: 3, price: 20, lat: 15.8470, lng: 74.4940, inStock: true },
  { name: "Ibuprofen", shop: "Apollo Pharmacy", distance: 4, price: 40, lat: 15.8510, lng: 74.5000, inStock: true },
  { name: "Amoxicillin", shop: "MedPlus", distance: 6, price: 85, lat: 15.8540, lng: 74.5040, inStock: false },
  { name: "Cetirizine", shop: "1mg Store", distance: 2, price: 15, lat: 15.8490, lng: 74.4960, inStock: true },
  { name: "Metformin", shop: "HealthCare Store", distance: 7, price: 45, lat: 15.8570, lng: 74.5070, inStock: true },
  { name: "Omeprazole", shop: "Wellness Pharmacy", distance: 3, price: 55, lat: 15.8480, lng: 74.4950, inStock: true },
  { name: "Azithromycin", shop: "Apollo Pharmacy", distance: 5, price: 120, lat: 15.8525, lng: 74.5015, inStock: false },
  { name: "Vitamin D3", shop: "MedPlus", distance: 4, price: 200, lat: 15.8515, lng: 74.5005, inStock: true },
  { name: "Pantoprazole", shop: "1mg Store", distance: 6, price: 65, lat: 15.8545, lng: 74.5045, inStock: true },
  { name: "Atorvastatin", shop: "Apollo Pharmacy", distance: 3, price: 95, lat: 15.8495, lng: 74.4985, inStock: true },
  { name: "Amlodipine", shop: "MedPlus", distance: 5, price: 75, lat: 15.8530, lng: 74.5020, inStock: true },
  { name: "Metoprolol", shop: "HealthCare Store", distance: 7, price: 110, lat: 15.8565, lng: 74.5065, inStock: false },
  { name: "Losartan", shop: "Wellness Pharmacy", distance: 4, price: 88, lat: 15.8475, lng: 74.4945, inStock: true },
  { name: "Ramipril", shop: "Apollo Pharmacy", distance: 6, price: 92, lat: 15.8535, lng: 74.5025, inStock: true },
  { name: "Glimepiride", shop: "1mg Store", distance: 3, price: 68, lat: 15.8485, lng: 74.4955, inStock: true },
  { name: "Montelukast", shop: "MedPlus", distance: 5, price: 145, lat: 15.8520, lng: 74.5010, inStock: false },
  { name: "Levothyroxine", shop: "HealthCare Store", distance: 8, price: 55, lat: 15.8555, lng: 74.5055, inStock: true },
  { name: "Ciprofloxacin", shop: "Wellness Pharmacy", distance: 4, price: 78, lat: 15.8472, lng: 74.4942, inStock: true },
  { name: "Doxycycline", shop: "Apollo Pharmacy", distance: 6, price: 95, lat: 15.8528, lng: 74.5018, inStock: true },
  { name: "Fluconazole", shop: "MedPlus", distance: 3, price: 42, lat: 15.8518, lng: 74.5008, inStock: false },
  { name: "Hydroxychloroquine", shop: "1mg Store", distance: 7, price: 135, lat: 15.8548, lng: 74.5048, inStock: true },
  { name: "Prednisolone", shop: "HealthCare Store", distance: 5, price: 48, lat: 15.8558, lng: 74.5058, inStock: true },
  { name: "Ranitidine", shop: "Wellness Pharmacy", distance: 2, price: 22, lat: 15.8478, lng: 74.4948, inStock: true },
  { name: "Loperamide", shop: "Apollo Pharmacy", distance: 4, price: 35, lat: 15.8508, lng: 74.4998, inStock: true },
  { name: "Ondansetron", shop: "MedPlus", distance: 6, price: 62, lat: 15.8538, lng: 74.5028, inStock: false },
  { name: "Domperidone", shop: "1mg Store", distance: 3, price: 28, lat: 15.8488, lng: 74.4958, inStock: true },
  { name: "Aceclofenac", shop: "HealthCare Store", distance: 5, price: 45, lat: 15.8568, lng: 74.5068, inStock: true },
  { name: "Diclofenac", shop: "Wellness Pharmacy", distance: 2, price: 30, lat: 15.8468, lng: 74.4938, inStock: true },
  { name: "Tramadol", shop: "Apollo Pharmacy", distance: 7, price: 85, lat: 15.8532, lng: 74.5022, inStock: false },
  { name: "Gabapentin", shop: "MedPlus", distance: 4, price: 120, lat: 15.8512, lng: 74.5002, inStock: true },
  { name: "Pregabalin", shop: "1mg Store", distance: 6, price: 155, lat: 15.8542, lng: 74.5042, inStock: true },
  { name: "Sertraline", shop: "HealthCare Store", distance: 5, price: 180, lat: 15.8552, lng: 74.5052, inStock: false },
  { name: "Escitalopram", shop: "Wellness Pharmacy", distance: 3, price: 165, lat: 15.8482, lng: 74.4952, inStock: true },
  { name: "Alprazolam", shop: "Apollo Pharmacy", distance: 4, price: 72, lat: 15.8502, lng: 74.4992, inStock: true },
  { name: "Clonazepam", shop: "MedPlus", distance: 6, price: 88, lat: 15.8536, lng: 74.5026, inStock: true },
  { name: "Vitamin B12", shop: "1mg Store", distance: 2, price: 95, lat: 15.8486, lng: 74.4956, inStock: true },
  { name: "Vitamin C", shop: "HealthCare Store", distance: 3, price: 45, lat: 15.8572, lng: 74.5072, inStock: true },
  { name: "Zinc Tablet", shop: "Wellness Pharmacy", distance: 4, price: 38, lat: 15.8466, lng: 74.4936, inStock: true },
  { name: "Iron Tablet", shop: "Apollo Pharmacy", distance: 5, price: 52, lat: 15.8522, lng: 74.5012, inStock: false },
  { name: "Calcium Tablet", shop: "MedPlus", distance: 3, price: 65, lat: 15.8516, lng: 74.5006, inStock: true },
  { name: "Folic Acid", shop: "1mg Store", distance: 2, price: 28, lat: 15.8496, lng: 74.4986, inStock: true },
  { name: "Multivitamin", shop: "HealthCare Store", distance: 4, price: 180, lat: 15.8546, lng: 74.5046, inStock: true },
  { name: "Omega 3", shop: "Wellness Pharmacy", distance: 6, price: 250, lat: 15.8476, lng: 74.4946, inStock: false },
  { name: "Biotin", shop: "Apollo Pharmacy", distance: 3, price: 195, lat: 15.8506, lng: 74.4996, inStock: true },
  { name: "Melatonin", shop: "MedPlus", distance: 5, price: 145, lat: 15.8526, lng: 74.5016, inStock: true },
  { name: "Insulin", shop: "1mg Store", distance: 4, price: 320, lat: 15.8544, lng: 74.5044, inStock: true },
  { name: "Metronidazole", shop: "HealthCare Store", distance: 3, price: 35, lat: 15.8562, lng: 74.5062, inStock: true },
  { name: "Tinidazole", shop: "Wellness Pharmacy", distance: 5, price: 42, lat: 15.8464, lng: 74.4934, inStock: false },
  { name: "Albendazole", shop: "Apollo Pharmacy", distance: 2, price: 28, lat: 15.8504, lng: 74.4994, inStock: true },
  { name: "Ivermectin", shop: "MedPlus", distance: 6, price: 65, lat: 15.8514, lng: 74.5004, inStock: true },
  { name: "Chloroquine", shop: "1mg Store", distance: 4, price: 55, lat: 15.8534, lng: 74.5024, inStock: true },
  { name: "Oseltamivir", shop: "HealthCare Store", distance: 7, price: 285, lat: 15.8544, lng: 74.5044, inStock: false },
  { name: "Acyclovir", shop: "Wellness Pharmacy", distance: 3, price: 95, lat: 15.8474, lng: 74.4944, inStock: true },
  { name: "Valacyclovir", shop: "Apollo Pharmacy", distance: 5, price: 165, lat: 15.8500, lng: 74.4990, inStock: true },
  { name: "Salbutamol", shop: "MedPlus", distance: 2, price: 85, lat: 15.8524, lng: 74.5014, inStock: true },
  { name: "Budesonide", shop: "1mg Store", distance: 4, price: 245, lat: 15.8540, lng: 74.5040, inStock: false },
  { name: "Ipratropium", shop: "HealthCare Store", distance: 6, price: 185, lat: 15.8556, lng: 74.5056, inStock: true },
  { name: "Theophylline", shop: "Wellness Pharmacy", distance: 3, price: 72, lat: 15.8462, lng: 74.4932, inStock: true },
  { name: "Furosemide", shop: "Apollo Pharmacy", distance: 5, price: 38, lat: 15.8498, lng: 74.4988, inStock: true },
  { name: "Spironolactone", shop: "MedPlus", distance: 4, price: 62, lat: 15.8510, lng: 74.5000, inStock: false },
  { name: "Digoxin", shop: "1mg Store", distance: 7, price: 45, lat: 15.8530, lng: 74.5020, inStock: true },
  { name: "Warfarin", shop: "HealthCare Store", distance: 5, price: 55, lat: 15.8550, lng: 74.5050, inStock: true },
  { name: "Heparin", shop: "Wellness Pharmacy", distance: 3, price: 180, lat: 15.8470, lng: 74.4940, inStock: true },
  { name: "Clopidogrel", shop: "Apollo Pharmacy", distance: 4, price: 95, lat: 15.8494, lng: 74.4984, inStock: false },
  { name: "Atenolol", shop: "MedPlus", distance: 6, price: 42, lat: 15.8518, lng: 74.5008, inStock: true },
  { name: "Nifedipine", shop: "1mg Store", distance: 3, price: 58, lat: 15.8538, lng: 74.5028, inStock: true },
  { name: "Verapamil", shop: "HealthCare Store", distance: 5, price: 75, lat: 15.8558, lng: 74.5058, inStock: true },
  { name: "Diltiazem", shop: "Wellness Pharmacy", distance: 4, price: 88, lat: 15.8460, lng: 74.4930, inStock: false },
  { name: "Lisinopril", shop: "Apollo Pharmacy", distance: 2, price: 65, lat: 15.8492, lng: 74.4982, inStock: true },
  { name: "Enalapril", shop: "MedPlus", distance: 5, price: 72, lat: 15.8512, lng: 74.5002, inStock: true },
  { name: "Candesartan", shop: "1mg Store", distance: 7, price: 95, lat: 15.8532, lng: 74.5022, inStock: true },
  { name: "Telmisartan", shop: "HealthCare Store", distance: 3, price: 82, lat: 15.8552, lng: 74.5052, inStock: false },
  { name: "Valsartan", shop: "Wellness Pharmacy", distance: 4, price: 78, lat: 15.8468, lng: 74.4938, inStock: true },
  { name: "Sitagliptin", shop: "Apollo Pharmacy", distance: 6, price: 285, lat: 15.8488, lng: 74.4958, inStock: true },
  { name: "Vildagliptin", shop: "MedPlus", distance: 3, price: 265, lat: 15.8508, lng: 74.4998, inStock: true },
  { name: "Empagliflozin", shop: "1mg Store", distance: 5, price: 320, lat: 15.8528, lng: 74.5018, inStock: false },
  { name: "Dapagliflozin", shop: "HealthCare Store", distance: 4, price: 298, lat: 15.8548, lng: 74.5048, inStock: true },
  { name: "Rosuvastatin", shop: "Wellness Pharmacy", distance: 2, price: 115, lat: 15.8458, lng: 74.4928, inStock: true },
  { name: "Fenofibrate", shop: "Apollo Pharmacy", distance: 5, price: 88, lat: 15.8486, lng: 74.4956, inStock: true },
  { name: "Ezetimibe", shop: "MedPlus", distance: 4, price: 145, lat: 15.8506, lng: 74.4996, inStock: false },
  { name: "Allopurinol", shop: "1mg Store", distance: 3, price: 35, lat: 15.8526, lng: 74.5016, inStock: true },
  { name: "Colchicine", shop: "HealthCare Store", distance: 6, price: 65, lat: 15.8546, lng: 74.5046, inStock: true },
  { name: "Sulfasalazine", shop: "Wellness Pharmacy", distance: 5, price: 78, lat: 15.8466, lng: 74.4936, inStock: true },
  { name: "Hydroxyzine", shop: "Apollo Pharmacy", distance: 3, price: 52, lat: 15.8484, lng: 74.4954, inStock: false },
  { name: "Loratadine", shop: "MedPlus", distance: 2, price: 18, lat: 15.8504, lng: 74.4994, inStock: true },
  { name: "Fexofenadine", shop: "1mg Store", distance: 4, price: 45, lat: 15.8524, lng: 74.5014, inStock: true },
  { name: "Levocetirizine", shop: "HealthCare Store", distance: 3, price: 22, lat: 15.8554, lng: 74.5054, inStock: true },
  { name: "Desloratadine", shop: "Wellness Pharmacy", distance: 5, price: 35, lat: 15.8456, lng: 74.4926, inStock: false },
  { name: "Betahistine", shop: "Apollo Pharmacy", distance: 4, price: 68, lat: 15.8482, lng: 74.4952, inStock: true },
  { name: "Promethazine", shop: "MedPlus", distance: 6, price: 42, lat: 15.8502, lng: 74.4992, inStock: true },
  { name: "Rabeproazole", shop: "1mg Store", distance: 3, price: 58, lat: 15.8522, lng: 74.5012, inStock: true },
  { name: "Esomeprazole", shop: "HealthCare Store", distance: 5, price: 72, lat: 15.8542, lng: 74.5042, inStock: false },
  { name: "Lansoprazole", shop: "Wellness Pharmacy", distance: 2, price: 48, lat: 15.8462, lng: 74.4932, inStock: true },
  { name: "Sucralfate", shop: "Apollo Pharmacy", distance: 4, price: 38, lat: 15.8480, lng: 74.4950, inStock: true },
  { name: "Dicyclomine", shop: "MedPlus", distance: 3, price: 32, lat: 15.8500, lng: 74.4990, inStock: true },
  { name: "Hyoscine", shop: "1mg Store", distance: 5, price: 45, lat: 15.8520, lng: 74.5010, inStock: false },
  { name: "Bisacodyl", shop: "HealthCare Store", distance: 2, price: 28, lat: 15.8560, lng: 74.5060, inStock: true },
  { name: "Lactulose", shop: "Wellness Pharmacy", distance: 4, price: 55, lat: 15.8454, lng: 74.4924, inStock: true }
];

// Initialize map with Belgaum as default
let map = L.map('map').setView([15.8497, 74.4977], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

let markers = [];

// Use my location function
function useMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      map.setView([lat, lng], 13);
      L.marker([lat, lng])
        .addTo(map)
        .bindPopup("You are here!")
        .openPopup();
    }, function() {
      alert("Location access denied. Showing Belgaum.");
    });
  } else {
    alert("Geolocation not supported by your browser.");
  }
}

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
          <h3>${m.name} <span class="badge ${m.inStock ? 'in-stock' : 'out-stock'}">${m.inStock ? 'In Stock' : 'Out of Stock'}</span></h3>
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