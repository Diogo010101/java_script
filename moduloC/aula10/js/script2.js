

function somar(){
    var objnumero1 = document.getElementById('number1');
    numero1 = Number(objnumero1.value);

    var objnumero2 = document.getElementById('number2')
    numero2 = Number(objnumero2.value);

    var outPut = document.getElementById('saida')

    var resultado = (numero1 + numero2);
    outPut.innerHTML = `"${resultado}" é o resultado da soma entre ${numero1} e ${numero2}`;
}

function subtracao() {
    var objnumero1 = document.getElementById('number1');
    numero1 = Number(objnumero1.value);

    var objnumero2 = document.getElementById('number2')
    numero2 = Number(objnumero2.value);

    var outPut = document.getElementById('saida')

    var resultado = (numero1 - numero2);
    outPut.innerHTML = `"${resultado}" é o resultado da subtração entre ${numero1} e ${numero2}`;
}



function multiplicar() {
    var objnumero1 = document.getElementById('number1');
    numero1 = Number(objnumero1.value);

    var objnumero2 = document.getElementById('number2')
    numero2 = Number(objnumero2.value);

    var outPut = document.getElementById('saida')

    var resultado = (numero1 * numero2);
    outPut.innerHTML = `"${resultado}" é o resultado da multiplicação entre ${numero1} e ${numero2}`;
}


function divisao() {
    var objnumero1 = document.getElementById('number1');
    numero1 = Number(objnumero1.value);

    var objnumero2 = document.getElementById('number2')
    numero2 = Number(objnumero2.value);

    var outPut = document.getElementById('saida')

    var resultado = (numero1 / numero2);
    outPut.innerHTML = `"${resultado.toFixed(2)}" é o resultado da divisão entre ${numero1} e ${numero2}`;
}