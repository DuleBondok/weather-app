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
        else if(condition === "Partially cloudy" || condition === "Rain, Partially cloudy")
        {
            weatherIcon.src ="partuallyCloud.png"
            weatherImg.src = "clouds.jpg";
        }

        let feelsLike = Math.round((cityData.currentConditions.feelslike - 32) * 5 / 9);
        feel.textContent = `Feels like: ${feelsLike}`;
        
    }
    
    getCity();
})










 function titleCase(string){
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}