// Add an event listener to the form to handle form submission
document.getElementById('weatherForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the value of the ZIP code input field
    const zipCode = document.getElementById('zipCode').value;

    try {
        // Send a POST request to the server with the ZIP code
        const response = await fetch('http://localhost:3000/weather', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ zipCode }), // Send the ZIP code in the request body
        });

        // Parse the JSON response from the server
        const weatherData = await response.json();

        // Check if the weather data contains the main property (indicating a successful response)
        if (weatherData.main) {
            // Update the weatherInfo div with the fetched weather data
            document.getElementById('weatherInfo').innerHTML = `
                <h2>Weather for ${weatherData.name}</h2><p>Temperature: ${weatherData.main.temp}°F</p><p>Weather: ${weatherData.weather[0].description}</p><p>Humidity: ${weatherData.main.humidity}%</p>
            `;
        } else {
            // Display an error message if the weather data could not be fetched
            document.getElementById('weatherInfo').innerHTML = `<p>Could not fetch weather data. Please try again.</p>`;
        }
    } catch (error) {
        // Display an error message if there was an error with the fetch request
        document.getElementById('weatherInfo').innerHTML = `<p>Error fetching weather data.</p>`;
    }
});
