const apikey = "54e74dd93cf3d6cd483a16cc6861e12f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const serachbox = document.querySelector(".search input")
const serachbtn = document.querySelector(".search button")
const weathericons = document.querySelector(".weather-icons")

async function checkweather(city){
   
    const respones =  await fetch(apiUrl + city + `&appid=${apikey}`);
    if(respones.status == 404){
      document.querySelector(".error").style.display="block"
      document.querySelector(".wether").style.display="none"
    }else{

    var data = await respones.json();
     console.log(data)
     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
     document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
     document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";


     if(data.weather[0].main == "Clouds"){
       weathericons.src = "images/clouds.png";
       

     }
        else if (data.weather[0].main == "Clear"){
      weathericons.src = "images/clear.png";


     }
     else if(data.weather[0].main == "Rain"){
      weathericons.src = "images/rain.png";
     }
     else if(data.weather[0].main == "Drizzle"){
      weathericons.src = "images/drizzle.png";



     }
     else if(data.weather[0].main == "Mist"){
      weathericons.src = "images/mist.png";
     }
     document.querySelector(".wether").style.display="block";
     document.querySelector(".error").style.display="none";

   }
  

}
serachbtn.addEventListener("click",()=>{
   checkweather(serachbox.value)
    
 
     
  })





