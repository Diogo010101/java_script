var objSaida = document.querySelector('#saida');

function bhaskara(){
    var valorA = Number(window.prompt(`Qual o valor de A?`));
    var valorB = Number(window.prompt(`Qual o valor de B?`));
    var valorC = Number(window.prompt(`Qual o valor de C?`));
    const resultado = valorA + valorB -valorC

    objSaida.innerHTML = `O resultado final é ${resultado}`;

}