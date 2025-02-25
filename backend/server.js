// Import required modules
const express = require('express');
const axios = require('axios');
const path = require('path');

// Create an instance of an Express application
const app = express();
const port = 3000; // Define the port the server will listen on

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Root route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Route to fetch weather data based on the provided zip code
app.post('/weather', async (req, res) => {
    const { zipCode } = req.body; // Extract zip code from the request body
    try {
        // Make a request to the OpenWeatherMap API to get weather data
        const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=YOUR_API_KEY&units=imperial`);
        res.json(weatherResponse.data); // Send the weather data as a JSON response
    } catch (error) {
        // Handle errors by sending a 500 status code and an error message
        res.status(500).json({ message: 'Error fetching weather data.' });
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
