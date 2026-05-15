let selectedDistance = 10;

const medicines = [
  { name: "Paracetamol", shop: "Apollo Pharmacy", distance: 2, price: 25, lat: 12.9716, lng: 77.5946, inStock: true },
  { name: "Crocin", shop: "MedPlus", distance: 5, price: 30, lat: 12.9750, lng: 77.6000, inStock: true },
  { name: "Dolo 650", shop: "HealthCare Store", distance: 8, price: 35, lat: 12.9800, lng: 77.6100, inStock: true },
  { name: "Aspirin", shop: "Wellness Pharmacy", distance: 3, price: 20, lat: 12.9680, lng: 77.5900, inStock: true },
  { name: "Ibuprofen", shop: "Apollo Pharmacy", distance: 4, price: 40, lat: 12.9720, lng: 77.5960, inStock: true },
  { name: "Amoxicillin", shop: "MedPlus", distance: 6, price: 85, lat: 12.9760, lng: 77.6020, inStock: false },
  { name: "Cetirizine", shop: "1mg Store", distance: 2, price: 15, lat: 12.9700, lng: 77.5930, inStock: true },
  { name: "Metformin", shop: "HealthCare Store", distance: 7, price: 45, lat: 12.9810, lng: 77.6120, inStock: true },
  { name: "Omeprazole", shop: "Wellness Pharmacy", distance: 3, price: 55, lat: 12.9690, lng: 77.5910, inStock: true },
  { name: "Azithromycin", shop: "Apollo Pharmacy", distance: 5, price: 120, lat: 12.9730, lng: 77.5970, inStock: false },
  { name: "Vitamin D3", shop: "MedPlus", distance: 4, price: 200, lat: 12.9740, lng: 77.5980, inStock: true },
  { name: "Pantoprazole", shop: "1mg Store", distance: 6, price: 65, lat: 12.9770, lng: 77.6030, inStock: true },
  { name: "Atorvastatin", shop: "Apollo Pharmacy", distance: 3, price: 95, lat: 12.9710, lng: 77.5950, inStock: true },
  { name: "Amlodipine", shop: "MedPlus", distance: 5, price: 75, lat: 12.9755, lng: 77.6010, inStock: true },
  { name: "Metoprolol", shop: "HealthCare Store", distance: 7, price: 110, lat: 12.9815, lng: 77.6130, inStock: false },
  { name: "Losartan", shop: "Wellness Pharmacy", distance: 4, price: 88, lat: 12.9685, lng: 77.5920, inStock: true },
  { name: "Ramipril", shop: "Apollo Pharmacy", distance: 6, price: 92, lat: 12.9725, lng: 77.5965, inStock: true },
  { name: "Glimepiride", shop: "1mg Store", distance: 3, price: 68, lat: 12.9705, lng: 77.5935, inStock: true },
  { name: "Montelukast", shop: "MedPlus", distance: 5, price: 145, lat: 12.9745, lng: 77.5990, inStock: false },
  { name: "Levothyroxine", shop: "HealthCare Store", distance: 8, price: 55, lat: 12.9805, lng: 77.6110, inStock: true },
  { name: "Ciprofloxacin", shop: "Wellness Pharmacy", distance: 4, price: 78, lat: 12.9688, lng: 77.5908, inStock: true },
  { name: "Doxycycline", shop: "Apollo Pharmacy", distance: 6, price: 95, lat: 12.9728, lng: 77.5968, inStock: true },
  { name: "Fluconazole", shop: "MedPlus", distance: 3, price: 42, lat: 12.9752, lng: 77.6002, inStock: false },
  { name: "Hydroxychloroquine", shop: "1mg Store", distance: 7, price: 135, lat: 12.9772, lng: 77.6032, inStock: true },
  { name: "Prednisolone", shop: "HealthCare Store", distance: 5, price: 48, lat: 12.9812, lng: 77.6122, inStock: true },
  { name: "Ranitidine", shop: "Wellness Pharmacy", distance: 2, price: 22, lat: 12.9692, lng: 77.5912, inStock: true },
  { name: "Loperamide", shop: "Apollo Pharmacy", distance: 4, price: 35, lat: 12.9722, lng: 77.5962, inStock: true },
  { name: "Ondansetron", shop: "MedPlus", distance: 6, price: 62, lat: 12.9758, lng: 77.6018, inStock: false },
  { name: "Domperidone", shop: "1mg Store", distance: 3, price: 28, lat: 12.9708, lng: 77.5938, inStock: true },
  { name: "Aceclofenac", shop: "HealthCare Store", distance: 5, price: 45, lat: 12.9818, lng: 77.6128, inStock: true },
  { name: "Diclofenac", shop: "Wellness Pharmacy", distance: 2, price: 30, lat: 12.9695, lng: 77.5915, inStock: true },
  { name: "Tramadol", shop: "Apollo Pharmacy", distance: 7, price: 85, lat: 12.9735, lng: 77.5975, inStock: false },
  { name: "Gabapentin", shop: "MedPlus", distance: 4, price: 120, lat: 12.9748, lng: 77.5988, inStock: true },
  { name: "Pregabalin", shop: "1mg Store", distance: 6, price: 155, lat: 12.9768, lng: 77.6028, inStock: true },
  { name: "Sertraline", shop: "HealthCare Store", distance: 5, price: 180, lat: 12.9808, lng: 77.6118, inStock: false },
  { name: "Escitalopram", shop: "Wellness Pharmacy", distance: 3, price: 165, lat: 12.9698, lng: 77.5918, inStock: true },
  { name: "Alprazolam", shop: "Apollo Pharmacy", distance: 4, price: 72, lat: 12.9718, lng: 77.5958, inStock: true },
  { name: "Clonazepam", shop: "MedPlus", distance: 6, price: 88, lat: 12.9762, lng: 77.6022, inStock: true },
  { name: "Vitamin B12", shop: "1mg Store", distance: 2, price: 95, lat: 12.9702, lng: 77.5932, inStock: true },
  { name: "Vitamin C", shop: "HealthCare Store", distance: 3, price: 45, lat: 12.9822, lng: 77.6132, inStock: true },
  { name: "Zinc Tablet", shop: "Wellness Pharmacy", distance: 4, price: 38, lat: 12.9682, lng: 77.5902, inStock: true },
  { name: "Iron Tablet", shop: "Apollo Pharmacy", distance: 5, price: 52, lat: 12.9732, lng: 77.5972, inStock: false },
  { name: "Calcium Tablet", shop: "MedPlus", distance: 3, price: 65, lat: 12.9742, lng: 77.5982, inStock: true },
  { name: "Folic Acid", shop: "1mg Store", distance: 2, price: 28, lat: 12.9712, lng: 77.5942, inStock: true },
  { name: "Multivitamin", shop: "HealthCare Store", distance: 4, price: 180, lat: 12.9802, lng: 77.6102, inStock: true },
  { name: "Omega 3", shop: "Wellness Pharmacy", distance: 6, price: 250, lat: 12.9692, lng: 77.5912, inStock: false },
  { name: "Biotin", shop: "Apollo Pharmacy", distance: 3, price: 195, lat: 12.9722, lng: 77.5962, inStock: true },
  { name: "Melatonin", shop: "MedPlus", distance: 5, price: 145, lat: 12.9752, lng: 77.6002, inStock: true },
  { name: "Insulin", shop: "1mg Store", distance: 4, price: 320, lat: 12.9772, lng: 77.6032, inStock: true },
  { name: "Metronidazole", shop: "HealthCare Store", distance: 3, price: 35, lat: 12.9812, lng: 77.6122, inStock: true },
  { name: "Tinidazole", shop: "Wellness Pharmacy", distance: 5, price: 42, lat: 12.9682, lng: 77.5902, inStock: false },
  { name: "Albendazole", shop: "Apollo Pharmacy", distance: 2, price: 28, lat: 12.9722, lng: 77.5962, inStock: true },
  { name: "Ivermectin", shop: "MedPlus", distance: 6, price: 65, lat: 12.9742, lng: 77.5982, inStock: true },
  { name: "Chloroquine", shop: "1mg Store", distance: 4, price: 55, lat: 12.9762, lng: 77.6022, inStock: true },
  { name: "Oseltamivir", shop: "HealthCare Store", distance: 7, price: 285, lat: 12.9802, lng: 77.6102, inStock: false },
  { name: "Acyclovir", shop: "Wellness Pharmacy", distance: 3, price: 95, lat: 12.9692, lng: 77.5912, inStock: true },
  { name: "Valacyclovir", shop: "Apollo Pharmacy", distance: 5, price: 165, lat: 12.9712, lng: 77.5952, inStock: true },
  { name: "Salbutamol", shop: "MedPlus", distance: 2, price: 85, lat: 12.9752, lng: 77.6002, inStock: true },
  { name: "Budesonide", shop: "1mg Store", distance: 4, price: 245, lat: 12.9772, lng: 77.6032, inStock: false },
  { name: "Ipratropium", shop: "HealthCare Store", distance: 6, price: 185, lat: 12.9812, lng: 77.6122, inStock: true },
  { name: "Theophylline", shop: "Wellness Pharmacy", distance: 3, price: 72, lat: 12.9682, lng: 77.5902, inStock: true },
  { name: "Furosemide", shop: "Apollo Pharmacy", distance: 5, price: 38, lat: 12.9722, lng: 77.5962, inStock: true },
  { name: "Spironolactone", shop: "MedPlus", distance: 4, price: 62, lat: 12.9742, lng: 77.5982, inStock: false },
  { name: "Digoxin", shop: "1mg Store", distance: 7, price: 45, lat: 12.9762, lng: 77.6022, inStock: true },
  { name: "Warfarin", shop: "HealthCare Store", distance: 5, price: 55, lat: 12.9802, lng: 77.6102, inStock: true },
  { name: "Heparin", shop: "Wellness Pharmacy", distance: 3, price: 180, lat: 12.9692, lng: 77.5912, inStock: true },
  { name: "Clopidogrel", shop: "Apollo Pharmacy", distance: 4, price: 95, lat: 12.9712, lng: 77.5952, inStock: false },
  { name: "Atenolol", shop: "MedPlus", distance: 6, price: 42, lat: 12.9752, lng: 77.6002, inStock: true },
  { name: "Nifedipine", shop: "1mg Store", distance: 3, price: 58, lat: 12.9772, lng: 77.6032, inStock: true },
  { name: "Verapamil", shop: "HealthCare Store", distance: 5, price: 75, lat: 12.9812, lng: 77.6122, inStock: true },
  { name: "Diltiazem", shop: "Wellness Pharmacy", distance: 4, price: 88, lat: 12.9682, lng: 77.5902, inStock: false },
  { name: "Lisinopril", shop: "Apollo Pharmacy", distance: 2, price: 65, lat: 12.9722, lng: 77.5962, inStock: true },
  { name: "Enalapril", shop: "MedPlus", distance: 5, price: 72, lat: 12.9742, lng: 77.5982, inStock: true },
  { name: "Candesartan", shop: "1mg Store", distance: 7, price: 95, lat: 12.9762, lng: 77.6022, inStock: true },
  { name: "Telmisartan", shop: "HealthCare Store", distance: 3, price: 82, lat: 12.9802, lng: 77.6102, inStock: false },
  { name: "Valsartan", shop: "Wellness Pharmacy", distance: 4, price: 78, lat: 12.9692, lng: 77.5912, inStock: true },
  { name: "Sitagliptin", shop: "Apollo Pharmacy", distance: 6, price: 285, lat: 12.9712, lng: 77.5952, inStock: true },
  { name: "Vildagliptin", shop: "MedPlus", distance: 3, price: 265, lat: 12.9752, lng: 77.6002, inStock: true },
  { name: "Empagliflozin", shop: "1mg Store", distance: 5, price: 320, lat: 12.9772, lng: 77.6032, inStock: false },
  { name: "Dapagliflozin", shop: "HealthCare Store", distance: 4, price: 298, lat: 12.9812, lng: 77.6122, inStock: true },
  { name: "Rosuvastatin", shop: "Wellness Pharmacy", distance: 2, price: 115, lat: 12.9682, lng: 77.5902, inStock: true },
  { name: "Fenofibrate", shop: "Apollo Pharmacy", distance: 5, price: 88, lat: 12.9722, lng: 77.5962, inStock: true },
  { name: "Ezetimibe", shop: "MedPlus", distance: 4, price: 145, lat: 12.9742, lng: 77.5982, inStock: false },
  { name: "Allopurinol", shop: "1mg Store", distance: 3, price: 35, lat: 12.9762, lng: 77.6022, inStock: true },
  { name: "Colchicine", shop: "HealthCare Store", distance: 6, price: 65, lat: 12.9802, lng: 77.6102, inStock: true },
  { name: "Sulfasalazine", shop: "Wellness Pharmacy", distance: 5, price: 78, lat: 12.9692, lng: 77.5912, inStock: true },
  { name: "Hydroxyzine", shop: "Apollo Pharmacy", distance: 3, price: 52, lat: 12.9712, lng: 77.5952, inStock: false },
  { name: "Loratadine", shop: "MedPlus", distance: 2, price: 18, lat: 12.9752, lng: 77.6002, inStock: true },
  { name: "Fexofenadine", shop: "1mg Store", distance: 4, price: 45, lat: 12.9772, lng: 77.6032, inStock: true },
  { name: "Levocetirizine", shop: "HealthCare Store", distance: 3, price: 22, lat: 12.9812, lng: 77.6122, inStock: true },
  { name: "Desloratadine", shop: "Wellness Pharmacy", distance: 5, price: 35, lat: 12.9682, lng: 77.5902, inStock: false },
  { name: "Betahistine", shop: "Apollo Pharmacy", distance: 4, price: 68, lat: 12.9722, lng: 77.5962, inStock: true },
  { name: "Promethazine", shop: "MedPlus", distance: 6, price: 42, lat: 12.9742, lng: 77.5982, inStock: true },
  { name: "Rabeproazole", shop: "1mg Store", distance: 3, price: 58, lat: 12.9762, lng: 77.6022, inStock: true },
  { name: "Esomeprazole", shop: "HealthCare Store", distance: 5, price: 72, lat: 12.9802, lng: 77.6102, inStock: false },
  { name: "Lansoprazole", shop: "Wellness Pharmacy", distance: 2, price: 48, lat: 12.9692, lng: 77.5912, inStock: true },
  { name: "Sucralfate", shop: "Apollo Pharmacy", distance: 4, price: 38, lat: 12.9712, lng: 77.5952, inStock: true },
  { name: "Dicyclomine", shop: "MedPlus", distance: 3, price: 32, lat: 12.9752, lng: 77.6002, inStock: true },
  { name: "Hyoscine", shop: "1mg Store", distance: 5, price: 45, lat: 12.9772, lng: 77.6032, inStock: false },
  { name: "Bisacodyl", shop: "HealthCare Store", distance: 2, price: 28, lat: 12.9812, lng: 77.6122, inStock: true },
  { name: "Lactulose", shop: "Wellness Pharmacy", distance: 4, price: 55, lat: 12.9682, lng: 77.5902, inStock: true }
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
          <span class="badge ${m.inStock ? 'in-stock' : 'out-stock'}">${m.inStock ? 'In Stock' : 'Out of Stock'}</span>
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