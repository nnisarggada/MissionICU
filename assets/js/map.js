// Where you want to render the map.
var element = document.getElementById("map");

// Create Leaflet map on map element.
var map = L.map(element, {
  minZoom: 4,
});

// Add OSM tile layer to the Leaflet map.
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution: "",
  // maxZoom: 18,
  // snapToZoom: true,
}).addTo(map);

map.setMaxBounds(
  L.latLngBounds(
    L.latLng(4.291356380775656, 65.25237926731651),
    L.latLng(33.97698963864011, 101.07991660528292)
  )
);

// Target's GPS coordinates.
var target = [22.096661863216614, 82.1395035548375];

// Set map's center to target with zoom 4.
map.setView(target, 4);

let locations = [];

function addMarker(name, lat, lng) {
  locations.push({ name: name, lat: lat, lng: lng });
}

addMarker("District Hospital Tumkur", 13.349446268392844, 77.09855528966014);
addMarker(
  "Aralaguppe Mallegowda District Hospital",
  13.314408415303127,
  75.77464563966373
);
addMarker("District Hospital Ballari", 15.14555538009933, 76.93476821775397);
addMarker(
  "Gadag Institute of Medical Sciences",
  15.378886562060709,
  75.60207647192723
);
addMarker("District Hospital Yadgir", 16.7984180998433, 77.09839516739012);
addMarker(
  "District Headquarters Hospital Nabarangpur",
  19.229034326964694,
  82.5666729802745
);
addMarker("District Hospital Dhule", 20.866602914501883, 74.76357245993931);
addMarker("General Hospital Khamgaon", 20.70816542329794, 76.57725938031425);
addMarker(
  "Sub District Hospital Shirala",
  17.064712592787444,
  74.2573878015337
);
addMarker(
  "Shri Guru Gobind Singh Ji Memorial District Hospital",
  19.44194063420544,
  73.17551817339177
);
addMarker("District Hospital Tamenglong", 24.98599695008361, 93.50246132055075);
addMarker("District Hospital Kamjong", 24.858345148366617, 94.51556620927616);
addMarker("CHC Parbung Hospital", 24.858334274258272, 94.51555858228927);
addMarker("District Hospital Chandel", 24.31571133465041, 93.98477325343602);
addMarker("District Hospital Champhai", 23.481246886736294, 93.30978612642248);
addMarker("District Hospital Lunglei", 22.88692463963647, 92.7437928423864);
addMarker(
  "Gyati Takka General Hospital Ziro",
  27.539237180069446,
  93.82187869402723
);
addMarker("District Hospital Noklak", 26.200883652713866, 95.02521040077823);
addMarker("Dhalai District Hospital", 23.954947489992822, 91.82524217117655);
addMarker("District Hospital Reasi", 33.09750789846318, 74.84543400343395);

for (let i = 0; i < locations.length; i++) {
  var marker = L.marker(L.latLng(locations[i]["lat"], locations[i]["lng"]), {
    title: locations[i]["name"],
    icon: L.icon({
      iconUrl: "assets/images/map-pin-with-logo-white.png",
      iconSize: [40, 40],
      // iconAnchor: [20, 40],
      // popupAnchor: [0, -40],
      // tooltipAnchor: [20, -40],
      // shadowSize: [20, 20],
      // shadowAnchor: [20, 20],
      // shadowUrl: "assets/img/map-marker-shadow.png",
    }),
  })
    .bindPopup("<b>" + locations[i]["name"] + "</b>")
    .openPopup();

  marker.properties = locations[i];
  marker.addTo(map);
}
