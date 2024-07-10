const button = document.getElementById("submit");

button.addEventListener("click", async () => {
    const inputvalue = document.getElementById("search").value;
    const apiKey = "8a8d3aac3495316f400d607c3456defa";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();


    const result = document.querySelector("div.result");
    const cityName = document.getElementById("city-name");
    const temp = document.getElementById("temperature");
    const description = document.getElementById("description");

    result.style.display = "block";
    cityName.textContent = data.name;
    temp.textContent = `${data.main.temp} °C`;
    description.textContent = data.weather[0].description;
});