        document.querySelector(".weather-status").style.display = "none";
        document.getElementById("search").addEventListener("click", function(){
        document.querySelector(".weather-status").style.display = "block"
        const currentLocation = document.getElementById("location").value  
        updateWeather(currentLocation) 
        document.getElementById("location").value = "" 
        });

        let button = document.getElementById("search");
        let input = document.getElementById("location");
        let city = document.getElementById("city");
        let country = document.getElementById("country");
        let temp = document.getElementById("temperature");
        let weather = document.getElementById("weather");
        let feel = document.getElementById("feel");
        let maxTemp = document.getElementById("maxTemp");
        let minTemp = document.getElementById("minTemp");
        let humidity = document.getElementById("humidity");
        let pressure = document.getElementById("pressure");
        let wind = document.getElementById("wind");
        let sunrise = document.getElementById("rise");
        let sunset = document.getElementById("set");
        let latitude = document.getElementById("latitude");
        let longitude = document.getElementById("longitude");
        let flag = document.querySelector(".flag");
     

        
    function updateWeather() {
        fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=08d56447475b6b65c15bfd3caafe9ed4`)
    .then(res => res.json())
    .then(data =>{
        
        weather.innerText = data.weather[0].description.toUpperCase();
        city.innerText= data.name;
        country.innerText = data.sys.country;
        temp.innerText = Math.round(data.main.temp) ;
        feel.innerText = Math.round(data.main.feels_like);
        maxTemp.innerText = Math.round(data.main.temp_max);
        minTemp.innerText = Math.round(data.main.temp_min);
        humidity.innerText = data.main.humidity;
        pressure.innerText = data.main.pressure;
        wind.innerText = data.wind.speed;
        latitude.innerText = data.coord.lat;
        longitude.innerText = data.coord.lon;
        
        const countryName = data.sys.country.toLowerCase();
        const flagLink = `https://flagpedia.net/data/flags/h80/${countryName}.webp`;
        flag.setAttribute("src",flagLink);

        if(data.weather[0].description ==="light rain" || data.weather[0].description ==="broken clouds" ){
                    
                    document.body.style.backgroundImage = "url('images/cloudy2.jpg')";
                    document.body.style.backgroundSize = "cover";
                    document.body.style.height = "100vh";  
                    document.querySelector(".state").style.color = "black";
                    document.querySelector(".details").style.color = "black" ;
                    document.querySelector(".time").style.color = "black" ;
                    document.querySelector(".temp").style.color = "black" ;  
                }
                 
                 else if(data.weather[0].description ==="moderate rain"){
                    
                    document.body.style.backgroundImage = "url('images/rain.jpg')";
                    document.body.style.backgroundSize = "cover";
                    document.body.style.height = "100vh";    
                }
                 else if(data.weather[0].description ==="clear sky"){
                    
                    document.body.style.backgroundImage = "url('images/clear sky.jpg')";
                    document.body.style.backgroundSize = "cover";
                    document.body.style.height = "100vh";  
                    document.querySelector(".state").style.color = "black";
                    document.querySelector(".details").style.color = "black" ;
                    document.querySelector(".time").style.color = "black" ;
                    document.querySelector(".temp").style.color = "black" ;
                }
                 else if(data.weather[0].description ==="snow" || data.weather[0].description ==="light snow"  ){
                    
                    document.body.style.backgroundImage = "url('images/snow.jpg')";
                    document.body.style.backgroundSize = "cover";
                    document.body.style.height = "100vh";    
                    document.querySelector(".state").style.color = "black";
                    document.querySelector(".details").style.color = "black" ;
                    document.querySelector(".time").style.color = "black" ;
                    document.querySelector(".temp").style.color = "black" ;
                }

                else{
                    document.body.style.background="rgb(16, 80, 105)";
                    document.body.style.backgroundSize = "cover";
                    document.body.style.height = "100vh"; 
                }

            console.log(data);
            
    })
        .catch ( err => alert("wrong city name!"))
        
    }
    
    

    function setDate() {
    let day = document.getElementById('day');
    let date = document.getElementById('date');
    const days = ["Sunday","Monday","Tuesday","WednesDay","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const update = new Date();
    const currentDay = update.getDay();
    const month = update.getMonth();
    const year = update.getFullYear();
    const newDate = update.getDate();
    const fullDate = `${newDate} ${months[month]} ${year}`;

    day.innerText = days[currentDay];
    date.innerText = fullDate;
}

setDate();
    
    
    
