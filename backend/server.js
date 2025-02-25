// backend/server.js
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Weather data route
app.post('/weather', async (req, res) => {
    const { zipCode } = req.body;
    try {
        const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=YOUR_API_KEY&units=imperial`);
        res.json(weatherResponse.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching weather data.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

