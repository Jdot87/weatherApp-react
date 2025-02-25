// frontend/script.js
document.getElementById('weatherForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const zipCode = document.getElementById('zipCode').value;

    try {
        const response = await fetch('http://localhost:3000/weather', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ zipCode }),
        });

        const weatherData = await response.json();
        
        if (weatherData.main) {
            document.getElementById('weatherInfo').innerHTML = `
                <h2>Weather for ${weatherData.name}</h2>
                <p>Temperature: ${weatherData.main.temp}°F</p>
                <p>Weather: ${weatherData.weather[0].description}</p>
                <p>Humidity: ${weatherData.main.humidity}%</p>
            `;
        } else {
            document.getElementById('weatherInfo').innerHTML = `<p>Could not fetch weather data. Please try again.</p>`;
        }
    } catch (error) {
        document.getElementById('weatherInfo').innerHTML = `<p>Error fetching weather data.</p>`;
    }
});

