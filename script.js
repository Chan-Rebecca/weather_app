async function getWeather() {
    var apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    var city = document.getElementById("cityInput").value;
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        var response = await fetch(apiUrl);
        var data = await response.json();

        var weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `
            <h2>Weather in ${city}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Description: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = "<p>Failed to fetch weather data. Please try again later.</p>";
    }
}
