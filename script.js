const searchImg = document.getElementById("searchImg");
let inputValue = document.getElementById("searchInput").value;
let cityNameHeader = document.getElementById("cityNameHeader");
let dateTime = document.getElementById("dateTime");
let temperatureHeading = document.getElementById("temperatureHeading");
let weatherIcon = document.getElementById("weatherIcon");
let tempIcon = document.getElementById("tempIcon");
let letterC = document.getElementById("letterC");
let tempNote = document.getElementById("tempNote");
let weatherImg = document.getElementById("weatherImg");
let feel = document.getElementById("feel");
let humidity = document.getElementById("humidity");
let wind = document.getElementById ("wind");
let tempIcon1 = document.getElementById("tempIcon1");
let letterC1 = document.getElementById("letterC1");
let githubImg = document.getElementById("githubImg");

searchImg.addEventListener("click", () => {

    async function getCity() {
        let inputValue = document.getElementById("searchInput").value;
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputValue}?key=XAARS3MTBFNF2Y667CSSL4THJ`, {mode: 'cors'});
        let cityData = await response.json();
        console.log(cityData);
        tempIcon.src = "tempC.png";
        letterC.textContent = "C";

        let cityName = cityData.address;
        let cityName1 = titleCase(cityName);
        console.log(cityName1);
        cityNameHeader.textContent = cityName1;

        let date = cityData.days[0].datetime;
        console.log(date);
        let time = cityData.currentConditions.datetime;
        dateTime.textContent = `${date}, ${time}`;

        let temp = Math.round((cityData.currentConditions.temp - 32) * 5 / 9);
        console.log(temp);
        temperatureHeading.textContent = temp;

        let condition = cityData.currentConditions.conditions;
        tempNote.textContent = condition;
        console.log(condition);
        if(condition === "Clear")
        {
            weatherIcon.src = "clear-sky.png";
            weatherImg.src = "clearSky.jpg";
        }
        else if(condition === "Partially cloudy" || condition === "Rain, Partially cloudy" || condition === "Overcast")
        {
            weatherIcon.src ="partuallyCloud.png"
            weatherImg.src = "clouds.jpg";
        }
        else
        {
            weatherIcon.src = "clear-sky.png";
            weatherImg.src = "weather.jpg";
        }

        let feelsLike = Math.round((cityData.currentConditions.feelslike - 32) * 5 / 9);
        feel.textContent = `Feels like: ${feelsLike}`;
        tempIcon1.textContent = "o";
        letterC1.textContent = "C";

        let humidityValue = cityData.currentConditions.humidity;
        humidity.textContent = `Humidity: ${humidityValue}%`;

        let windValue = cityData.currentConditions.windspeed;
        wind.textContent = `Wind: ${windValue}km/h`;
        
    }
    
    getCity();
})

githubImg.addEventListener("click", () => {
    window.open("https://github.com/DuleBondok"); 
})









 function titleCase(string){
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}