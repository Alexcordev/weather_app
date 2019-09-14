'use strict'

var info = document.querySelector('#weather');
var showLogo = document.querySelector('#logo');
var showVille = document.querySelector('#city');
var getNomVille = document.getElementById('nomdeville');


function myFunction() {
    
getRequest()
.then(response => response.json())
.then(response => {
   showWeather(response.main);

     
   
 function showWeather(main) {
    
    var title = document.createElement('h3');
    var subtitle = document.createElement('h3');
    var nomVille = document.createElement('h1');
    var pression = document.createElement('h2');

    title.innerHTML = 'Max : ' + ' ' + main.temp_max + ' °C';
    title.style.margin = '0px 15px 0px 20px';
    title.style.width = '75%';
    title.style.color = '#0066ff'
    title.style.fontSize = '35px';

    nomVille.innerHTML = response.name;
    nomVille.style.fontSize = '60px';
    nomVille.style.color = '#ffffff';

    subtitle.innerHTML = 'Min : ' + ' ' + main.temp_min + ' °C';
    subtitle.style.margin = '20px 15px 0px 20px';
    subtitle.style.width = '75%';
    subtitle.style.color = '#0066ff'
    subtitle.style.fontSize = '35px';

    pression.innerHTML = 'Pression : ' + main.pressure + ' Kpa';
    pression.style.margin = '20px 15px 0px 20px';
    pression.style.width = '60%';
    pression.style.color = '#0066ff'
    pression.style.fontSize = '35px';

    info.appendChild(title);
    info.appendChild(subtitle);
    showVille.appendChild(nomVille);
    showLogo.appendChild(pression);
        
    }
        
});


    
function getRequest() {
    const api = '&appid=88d66df667fd895062fb4a30475feac4';
    var q = getNomVille.value;
    const units = 'units=metric';
    const lang = 'lang=fr';
    const link = 'https://api.openweathermap.org/data/2.5/weather?q='
    const url = link + q + '&' + units + '&' + lang + api 
    
    
    return fetch(url); 
       
  
}



getRequest()
.then(response => response.json())
.then(response => {
   showWeather(response.weather);
 
    
 function showWeather (showWeather) {
   showWeather.map((weather, i) => {
    var icon = document.createElement('img');
    icon.src = 'https://openweathermap.org/img/wn/' + weather.icon  +  '.png';
    icon.style.margin = '20px 15px 0px 20px';
    icon.style.width = '125px';
    icon.style.height = '125px';
    icon.style.background = '#3385ff';
    icon.style.border = '2px solid #000000';
    icon.style.float = 'right';
    var conditions = document.createElement('h2');
    conditions.innerHTML = weather.description;
    conditions.style.margin = '10px 20px 20px 20px';
    conditions.style.fontSize = '50px';
    conditions.style.color = '#3385ff';
    showLogo.appendChild(icon);
    showLogo.appendChild(conditions);
 });

 

}



});


}

