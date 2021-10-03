const APIKEY = 'b500db65e6fec80384d3983b5d3635ee';

let url = `https://api.openweathermap.org/data/2.5/weather?q=Montreuil&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then((response) =>
 response.json().then((data) => {
     console.log(data);
     document.querySelector("#city").innerHTML = data.name;
     document.querySelector("#temp").innerHTML = data.main.temp;
     document.querySelector("#humidity").innerHTML = data.main.humidity;
     document.querySelector("#wind").innerHTML = data.wind.speed;

 })
);

