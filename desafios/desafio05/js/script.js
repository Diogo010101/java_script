

function converterFunction(){
    var objMetros = parseFloat(window.prompt('Digite a distância em (m)'));
    var objSaida = document.querySelector("#saida1");
    var objSaida2 = document.querySelector("#saida2");
    var km = objMetros / 1000;
    var hm = objMetros / 100;
    var dam = objMetros / 10;
    var dm = objMetros * 10;
    var cm = objMetros * 100;
    var mm = objMetros * 1000;

    objSaida.innerHTML = `A distância de ${objMetros.toFixed(2).replace('.',',')} metros, corresponde a...`;
    objSaida2.innerHTML = 
           `${km.toFixed(3).replace('.',',')} Quilômetros (km) </br>
            ${hm.toFixed(3).replace('.',',')} Hectômetros (Hm) <br>
            ${dam.toFixed(2).replace('.',',')} Decâmetros (Dam) <br>
            ${dm.toFixed(2).replace('.',',')} Decímetros (dm) <br>
            ${cm.toFixed(2).replace('.',',')} Centímetros (cm) <br>
            ${mm.toFixed(3)} Milímetros (mm) <br>
        `;

}