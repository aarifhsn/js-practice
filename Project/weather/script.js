const apiKey = "";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  const errorMsg = document.querySelector(".error_msg");
  if (response.status == 404) {
    errorMsg.style.display = "block";
  } else {
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".date").innerHTML = new Date();
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".phrase").innerHTML = data.weather[0].main;
    document.querySelector(".temp_max").innerHTML =
      Math.round(data.main.temp_max) + "°c";
    document.querySelector(".temp_min").innerHTML =
      Math.round(data.main.temp_min) + "°c";
    document.querySelector(".wind_speed").innerHTML =
      Math.round(data.wind.speed * 3.6) + "km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".visibility").innerHTML =
      data.visibility / 1000 + "km";

    // check the weather icon
    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather_content").style.display = "block";
    errorMsg.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
});
