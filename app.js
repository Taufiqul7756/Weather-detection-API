var button = document.querySelector("#button");
var inputValue = document.querySelector("#inputValue");
var city = document.querySelector("#city");
var temp = document.querySelector("#temp");
var description = document.querySelector("#description");
const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;

button.addEventListener("click", function (event) {
  const cityName = inputValue.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      var nameValue = data["name"];
      var tempValue = data["main"]["temp"];
      var descValue = data["weather"][0]["description"];
      city.innerText = nameValue;

      temp.innerText = tempValue;
      description.innerText = descValue;

      const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      console.log(url);
      const imgIcon = document.getElementById("weather-status");
      imgIcon.setAttribute("src", url);
    });
});
