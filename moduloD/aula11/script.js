
function somar(objNumero1, objNumero2, saida){
    var objSaida = saida;
    n1 = Number(objNumero1.value);
    n2 = Number(objNumero2.value)


    console.log(`Numero1 ${n1}`);
    console.log(`numero2 ${n2}`);
    var soma = Number(n1+ n2);
    console.log(`soma ${soma}`);
    objSaida.innerHTML = `A soma entre ${n1} + ${n2} = ${soma}`;
}