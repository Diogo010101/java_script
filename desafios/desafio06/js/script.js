function converterTemperatura(){
    var celsius = parseFloat(window.prompt('Digite a temperatura em ºC (Celsius)'));
    var kelvin = celsius + 273;
    var fahrenheit = (celsius * 1.8) + 32;
    var out0 = document.querySelector('#saida0')
    var out = document.querySelector('#saida');
    

    out0.innerHTML = `A temperatura de  ${celsius.toFixed(2).replace('.',',')}ºC corresponde a...`
    out.innerHTML = 
        `${kelvin.toFixed(2).replace('.', ',') }ºK (Kelvin)<br>
        ${fahrenheit.toFixed(2).replace('.', ',') }ºF (Fahrenheit)`
}