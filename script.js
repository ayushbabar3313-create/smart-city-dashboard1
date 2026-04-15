const apiKey = "ecb8e736e52d464095bb14771c8fe103";

// Mumbai AQI
fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=19.0760&lon=72.8777&appid=${ecb8e736e52d464095bb14771c8fe103}`)
.then(res => res.json())
.then(data => {
  document.getElementById("mumbai-aqi").innerText = data.list[0].main.aqi;
});

// Oslo AQI
fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=59.9139&lon=10.7522&appid=${1364fbe9bb23c6d92e3948651874f60c}`)
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
