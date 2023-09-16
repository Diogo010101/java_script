

function converterFunction(){
    var objMetros = parseFloat(window.prompt('Digite a distância em (m)'))
    var km = objMetros / 1000;
    document.write(`${objMetros} convertido em KM é igual a ${km.toFixed(2)}km`);

}