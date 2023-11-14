let finalizar = document.querySelector("#finalizar");
let objAdicionar = document.querySelector("#btadicionar");
let objSaida = document.querySelector("#idsaida");
let objNumero = document.querySelector("#idnumero");
let selectSaida = document.querySelector("#select");

let maior = 0;
let soma = 0;
let i = 0
let lista = []


function isNumero(n){
    n = Number(objNumero.value)
    if(n < 1 || n > 100){
        return window.alert("Digite um valor entre 1 e 100")
    }
    

}

function isLista(n, l){
    if(l.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}



objAdicionar.addEventListener("click", function adicionando(){
    let numero = Number(objNumero.value);
    if(numero <1 || numero > 100){
        isNumero()
        objNumero.value = ""
    } else if (isLista(numero, lista) == true){
        window.alert(`O valor ${numero} já foi adicionado a lista, escolha outro número`)
        objNumero.value = ""

    }else{
        objSaida.innerHTML = ``
        soma = 0
        //cria um elemento option para mostrar a informação dentro do select
        let item = document.createElement('option');
        item.text = `Valor ${numero} adicionado`;
        selectSaida.appendChild(item);

        lista.push(numero)
        //Verifica o maior valor dentro de cada indice e caso seja maior que o valor presente na variavel maior, ele subistitue o número dentro da variavel

        for (let i = 0; i < lista.length; i++) {
            if (lista[i] >= maior) {
                maior = lista[i]
            }

        }
        numero.value = ''
        numero.focus()

        return lista
    }


})





finalizar.addEventListener("click", function(){
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i]
        console.log(`valor ${soma}`)
    }
    lista.sort()
    objSaida.innerHTML = `Ao todo temos ${lista.length} números cadastrados<br>
    O maior valor informado foi: ${maior}<br>
    O menor valor informado foi: ${lista[0]}<br>
    A soma de todos os valores é igual a: ${soma}<br>
    A média dos valores é ${soma / lista.length}`

})



