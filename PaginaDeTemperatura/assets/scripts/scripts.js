function toFahrenheit() {
    let celsius = document.getElementById("degree").value
    let fahrenheit = (celsius * 9/5) + 32
    document.getElementById("result").innerText = fahrenheit.toFixed(2) + " °F"
}

function toCelsius() {
    let fahrenheit = document.getElementById("degree").value
    let celsius = (fahrenheit - 32) * 5/9
    document.getElementById("result").innerText = celsius.toFixed(2) + " °C"
}