const FREEZING_F = 32;

//const temperatureC = prompt('temperature in Celsius');

//const temperatureF = FREEZING_F + temperatureC * 1.8;
//console.log(temperatureF);

const tempF = prompt('Temperature in Fahrenheit');

const tempC = (tempF - FREEZING_F)/1.8;
console.log(tempC);