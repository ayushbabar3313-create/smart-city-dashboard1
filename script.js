const apiKey = "ecb8e736e52d464095bb14771c8fe103";

// Convert AQI level (1–5) to value
function convertAQI(level) {
  return [0, 50, 100, 150, 200, 300][level];
}

// Fetch Mumbai AQI
function getMumbaiAQI() {
  fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=19.0760&lon=72.8777&appid=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    const aqi = convertAQI(data.list[0].main.aqi);
    document.getElementById("mumbai-aqi").innerText = aqi;
  })
  .catch(err => console.log(err));
}

// Fetch Oslo AQI
function getOsloAQI() {
  fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=59.9139&lon=10.7522&appid=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    const aqi = convertAQI(data.list[0].main.aqi);
    document.getElementById("oslo-aqi").innerText = aqi;
  })
  .catch(err => console.log(err));
}

// 🔥 CALL FIRST TIME
getMumbaiAQI();
getOsloAQI();

// 🔥 AUTO REFRESH EVERY 10 SECONDS
setInterval(() => {
  getMumbaiAQI();
  getOsloAQI();
}, 10000);
