
# Weather NodeJS App

A simple weather application built with Node.js, utilizing the OpenWeatherMap API to display the current weather details, including temperature, humidity, and location. The app uses basic front-end HTML, CSS, and JavaScript to display the data in a user-friendly interface.

> **Note:** This application is currently **under construction**. The city must be manually added to the API URL in the server file for weather data retrieval.

---

## Features

- Displays current weather conditions for a specific city.
- Shows the current temperature, temperature range (min and max), and weather condition (e.g., Clouds, Clear).
- Uses icons from Font Awesome to visually represent the weather.
- Fully responsive design with a smooth layout for both desktop and mobile views.

---

## Project Setup

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

---

### Installation

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/Harmandeep01/WeatherAPPwAPI.git
   ```

2. Navigate to the project folder.

   ```bash
   cd WeatherAPPwAPI
   ```

3. Install the required dependencies using npm.

   ```bash
   npm install
   ```

---

### Running the Project

1. Start the server:

   ```bash
   node index.js
   ```

2. Open a browser and navigate to `http://localhost:8000`.

You should see the weather information displayed on the page.

---

## How It Works

- The app fetches the current weather data for a predefined location (Pathankot) from the [OpenWeatherMap API](https://openweathermap.org/api).
- The city name must be **manually added** to the API link inside the `index.js` file.
- The data is dynamically injected into the HTML using JavaScript.
- The application is styled using internal CSS for a responsive layout.

---

### Code Explanation

- **index.js:** Contains the server-side logic that fetches weather data using the `requests` package, processes it, and serves it to the front-end.
- **index.html:** The HTML structure of the app that displays weather details such as temperature, weather icon, location, and more.
- **CSS:** Basic styling to ensure the app looks good on mobile and desktop devices, with a responsive design.

---

## API Key

To use this application with your own OpenWeatherMap API key, replace the API key in `index.js`:

```js
requests('https://api.openweathermap.org/data/2.5/weather?q=your_city&appid=YOUR_API_KEY&units=metric')
```

You can get your API key by signing up at [OpenWeatherMap](https://openweathermap.org/).

---

## Contributing

Feel free to fork the repository and submit pull requests if you'd like to contribute. Whether it's a bug fix, feature request, or improvement, contributions are welcome.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy building and using this Weather NodeJS App! ☀️🌧️
