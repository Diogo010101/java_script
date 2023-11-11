let objInicio = document.querySelector("#idinicio");
let objFim = document.querySelector("#idfim");
let objPasso = document.querySelector("#idpasso");
let saida = document.querySelector("#saida");


function contar(){
    let inicio = Number(objInicio.value);
    let fim = Number(objFim.value);
    let passo = Number(objPasso.value);

    saida.innerHTML = `Contando... </br>`;
    for(inicio; inicio <= fim; inicio = inicio + passo){
        saida.innerHTML += `${inicio} \u{1F449}`;
        console.log(inicio)

    }
    saida.innerHTML += `\u{1F3C1}`;
}
