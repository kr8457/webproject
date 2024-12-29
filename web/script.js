document.addEventListener("DOMContentLoaded", () => {
  let map = L.map("map").setView([35.2889769, 75.640937], 15);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([35.2889769, 75.640937])
    .addTo(map)
    .bindPopup("ADVENTURE SARAI HOTEL SKARDU")
    .openPopup();
});
