function convertTemp() {
    var temp = document.getElementById('temperature').value;
    var res = document.getElementById('result');

    if(temp == null || temp == '') {
        res.innerHTML = 'Please enter a valid Temperature!';
        alert('Please enter a valid Temperature!');
    } else {
        if(document.getElementById('fahrenheitRadio').checked===true) {
            var converted = ((temp * 9) / 5 + 32).toFixed(2);
            res.innerHTML = 'Temperatue in Celsius: ' + converted + '°C';
    } else if (document.getElementById('celsiusRadio').checked===true) {
            var converted = ((temp - 32) * 5 / 9).toFixed(2);
            res.innerHTML = 'Temperatue in Fahrenheit: ' + converted + '°F';
    }
    }
       
}