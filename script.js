const apiKey = "YOUR_API_KEY";

// Mumbai AQI
fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=19.0760&lon=72.8777&appid=${apiKey}`)
.then(res => res.json())
.then(data => {
  document.getElementById("mumbai-aqi").innerText = data.list[0].main.aqi;
});

// Oslo AQI
fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=59.9139&lon=10.7522&appid=${apiKey}`)
.then(res => res.json())
.then(data => {
  document.getElementById("oslo-aqi").innerText = data.list[0].main.aqi;
});

// Chart
new Chart(document.getElementById("chart"), {
  type: "bar",
  data: {
    labels: ["Transport", "Mobility", "AQI", "Planning", "Sustainability"],
    datasets: [
      {
        label: "Mumbai",
        data: [4, 3, 2, 4, 5]
      },
      {
        label: "Oslo",
        data: [9, 9, 10, 9, 10]
      }
    ]
  }
});