# WeatherApp - Frontend and Backend Integration

A simple yet powerful weather application that allows users to enter a **ZIP code**, and get real-time weather data for that city. The app communicates with a backend API built using **Express.js** to fetch the weather data from an external weather service.

## Features

- **Frontend**: A minimal and clean user interface built with **HTML** and **JavaScript**.
- **Backend**: A simple RESTful API built with **Express.js** that handles user requests and fetches data from a weather API.
- **Real-time Weather**: Allows users to fetch weather details based on the ZIP code entered.
- **API Calls**: Utilizes **Fetch API** to send GET and POST requests to the backend.
- **Dynamic Weather Data**: Weather data dynamically displayed on the frontend when the user submits the form.

## Project Structure

/WeatherApp │ ├── /frontend │ ├── index.html # HTML file for the frontend │ ├── script.js # JavaScript file for handling API requests │ ├── /backend │ └── server.js # Express server to handle requests │ ├── /node_modules # Node modules ├── package.json # Project dependencies └── README.md # Project documentation


## Prerequisites

- **Node.js** (v14+)
- **npm** (v6+)
- An internet connection to fetch weather data from the API.

