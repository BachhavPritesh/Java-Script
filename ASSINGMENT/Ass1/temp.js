let temperature = 28; 


let message;

if (temperature < 0) {
    message = "Freezing Cold";
} else if (temperature <= 15) {
    message = "Very Cold";
} else if (temperature <= 25) {
    message = "Cold";
} else if (temperature <= 35) {
    message = "Warm";
} else {
    message = "Hot";
}

console.log("Temperature:", temperature + "°C");
console.log("Weather Category:", message);
