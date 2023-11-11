let data = new Date()

let objSaida = document.querySelector("#saida");
let objImg = document.querySelector("#imagem");
let objAnoNascimento = document.querySelector("#idnascimento");
let sexo = document.getElementsByName("sexo");






function verificarIdade(){
    var nascimento = Number(objAnoNascimento.value)
    var idade = data.getFullYear() - nascimento;



    if (idade < 0 || nascimento > 2023){
        window.alert(`Verifique as informações digitadas`);
    }else if(idade <= 1 && sexo[1].checked){
        objSaida.innerHTML = `Você uma MULHER recem nascida com ${idade} anos de idade`;
        objImg.src = "./img/recem_nascido.jpg"
    } else if (idade <= 1 && sexo[0].checked){
        objSaida.innerHTML = `Você um HOMEM recem nascio com ${idade} anos de idade`;
        objImg.src = "./img/recem_nascido.jpg"
    } else if (idade <= 4 && sexo[1].checked){
        objSaida.innerHTML = `Você uma MULHER com ${idade} anos de idade`;
        objImg.src = "./img/mulher_bebe.jpg"
    } else if (idade <= 4 && sexo[0].checked){
        objSaida.innerHTML = `Você um HOMEM com ${idade} anos de idade`;
        objImg.src = "./img/homem_bebe.jpg"
    } else if (idade <= 12 && sexo[1].checked) {
        objSaida.innerHTML = `Você uma MULHER com ${idade} anos de idade`;
        objImg.src = "./img/mulher_crianca.jpg"
    } else if (idade <= 12 && sexo[0].checked) {
        objSaida.innerHTML = `Você um HOMEM com ${idade} anos de idade`;
        objImg.src = "./img/homem_crianca.jpg"
    } else if (idade <= 18 && sexo[1].checked) {
        objSaida.innerHTML = `Você uma MULHER com ${idade} anos de idade`;
        objImg.src = "./img/mulher_adolescente.jpg"
    } else if (idade <= 18 && sexo[0].checked) {
        objSaida.innerHTML = `Você um HOMEM com ${idade} anos de idade`;
        objImg.src = "./img/homem_adolescente.jpg"
    } else if (idade <= 30 && sexo[1].checked) {
        objSaida.innerHTML = `Você uma MULHER com ${idade} anos de idade`;
        objImg.src = "./img/mulher_menos_30.jpg"
    } else if (idade <= 40 && sexo[1].checked) {
        objSaida.innerHTML = `Você uma MULHER com ${idade} anos de idade`;
        objImg.src = "./img/mulher_adulta.jpg"
    } else if (idade <= 40 && sexo[0].checked) {
        objSaida.innerHTML = `Você um HOMEM com ${idade} anos de idade`;
        objImg.src = "./img/homem_adulto.jpg"
    } else if (idade <= 60 && sexo[1].checked) {
        objSaida.innerHTML = `Você uma MULHER com ${idade} anos de idade`;
        objImg.src = "./img/mulher_idosa.jpg"
    } else if (idade <= 60 && sexo[0].checked) {
        objSaida.innerHTML = `Você um HOMEM com ${idade} anos de idade`;
        objImg.src = "./img/homem_idoso.jpg"
    } else if (idade <= 100 && sexo[1].checked) {
        objSaida.innerHTML = `Você uma MULHER com ${idade} anos de idade`;
        objImg.src = "./img/mulher_mais_60.jpg"
    } else if (idade <= 100 && sexo[0].checked) {
        objSaida.innerHTML = `Você um HOMEM com ${idade} anos de idade`;
        objImg.src = "./img/idoso_homem_mais_60.jpg"
    } else if (idade <= 120 && sexo[1].checked) {
        objSaida.innerHTML = `Você uma MULHER com ${idade} anos de idade`;
        objImg.src = "./img/mulher_idosa_mais_100.jpg"
    } else if (idade <= 120 && sexo[0].checked) {
        objSaida.innerHTML = `Você um HOMEM com ${idade} anos de idade`;
        objImg.src = "./img/idoso_homem_mais_100.jpg"
    }else{
        objSaida.innerHTML = `F`;
        objImg.src = "./img/lapide.jpg"
    }








}

