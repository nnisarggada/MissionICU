((g) => {
  var h,
    a,
    k,
    p = "The Google Maps JavaScript API",
    c = "google",
    l = "importLibrary",
    q = "__ib__",
    m = document,
    b = window;
  b = b[c] || (b[c] = {});
  var d = b.maps || (b.maps = {}),
    r = new Set(),
    e = new URLSearchParams(),
    u = () =>
      h ||
      (h = new Promise(async (f, n) => {
        await (a = m.createElement("script"));
        e.set("libraries", [...r] + "");
        for (k in g)
          e.set(
            k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
            g[k]
          );
        e.set("callback", c + ".maps." + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f;
        a.onerror = () => (h = n(Error(p + " could not load.")));
        a.nonce = m.querySelector("script[nonce]")?.nonce || "";
        m.head.append(a);
      }));
  d[l]
    ? console.warn(p + " only loads once. Ignoring:", g)
    : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
})({ key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "beta" });

// Initialize and add the map
let map;

async function initMap() {
  // The location of center
  const position = { lat: 22.250161205265993, lng: 82.17588356892945 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  function addMarker(title, lat, lng) {
    return (marker = new AdvancedMarkerElement({
      map: map,
      position: { lat: lat, lng: lng },
      title: title,
    }));
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
  addMarker(
    "District Hospital Tamenglong",
    24.98599695008361,
    93.50246132055075
  );
  addMarker("District Hospital Kamjong", 24.858345148366617, 94.51556620927616);
  addMarker("CHC Parbung Hospital", 24.858334274258272, 94.51555858228927);
  addMarker("District Hospital Chandel", 24.31571133465041, 93.98477325343602);
  addMarker(
    "District Hospital Champhai",
    23.481246886736294,
    93.30978612642248
  );
  addMarker("District Hospital Lunglei", 22.88692463963647, 92.7437928423864);
  addMarker(
    "Gyati Takka General Hospital Ziro",
    27.539237180069446,
    93.82187869402723
  );
  addMarker("District Hospital Noklak", 26.200883652713866, 95.02521040077823);
  addMarker("Dhalai District Hospital", 23.954947489992822, 91.82524217117655);
  addMarker("District Hospital Reasi", 33.09750789846318, 74.84543400343395);
}

initMap();
