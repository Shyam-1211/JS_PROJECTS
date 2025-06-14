const apiKey = "80b7f1576ec8427408cdb25eed013a44";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{

        var data = await response.json();
        
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".Wind").innerText = data.wind.speed + "Km/h";
        
        if(data.weather[0].main == "Clouds"){
            weathericon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weathericon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weathericon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weathericon.src = "images/mist.png"
        }
        
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})