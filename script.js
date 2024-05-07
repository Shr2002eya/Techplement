const apiKey = "77f92bd9086df73b47de16a264558ece"; 

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const weatherInfo = document.getElementById('weatherInfo');

searchButton.addEventListener('click', () => {
    const city = searchInput.value; 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;

            weatherInfo.innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>Temperature: <br><strong>${temperature}°C</strong></p>
                <p>Description: <br> <strong>${description}</strong></p>
                <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Sorry, an error occurred while fetching weather data.</p>';
        });
});