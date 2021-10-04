const APIKEY = 'b500db65e6fec80384d3983b5d3635ee';

// Appel a l'API openWeather avec ville en parm de fontion
let apiCall = function(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;


    fetch(url)
    .then((response) =>
        response.json().then((data) => {
            console.log(data);
            document.querySelector("#city").innerHTML = "<i class='fas fa-city'></i>" + data.name;
            document.querySelector("#temp").innerHTML = "<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°';
            document.querySelector("#humidity").innerHTML =  "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
            document.querySelector("#wind").innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + 'km/';
        })
    )
    .catch(err => console.log('Erreur : ' + err));
}

// Ecouteur d'evenement sur la soumission du formulaire
document.querySelector('#formId').addEventListener('submit', function(e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    apiCall(ville);
});

// Appel par défaut au chargement de la page 
apiCall('Montreuil');

