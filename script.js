document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherResult = document.getElementById('weatherResult');
            if (data.cod === 200) {
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                weatherResult.innerHTML = `The weather in ${city} is ${weatherDescription} with a temperature of ${temperature}°C.`;
            } else {
                weatherResult.innerHTML = 'City not found. Please try again.';
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            weatherResult.innerHTML = 'An error occurred. Please try again later.';
        });
});
