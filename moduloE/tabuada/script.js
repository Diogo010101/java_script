let objNumero = document.querySelector("#idnumero");



let objSaida = document.querySelector("#idtabuada");


function tabuada(){
    let numero = Number(objNumero.value);
    var i = 1;
    objSaida.innerHTML = ""
    if(numero.lenght == 0){
        window.alert(`Escolha um número para prosseguir`)
    }else{
        objSaida.style.display = "inline-block"
        for (i; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${numero} x ${i} = ${numero * i}`;
            objSaida.appendChild(item);

        }

    }


}