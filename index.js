function changeFahrenheitToCelsius(){
    const number = document.getElementById('fahrenheit').value;
    const result = ((number-32)*5)/9
    alert(result)
}
function changeCelsiusToFahrenheit(){
    const number = document.getElementById('fahrenheit').value;
    const result = (number*1.8)+32
    alert(result)
}