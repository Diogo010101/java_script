//Usando função anonima + concatenação de string + função dentro de variavel

const tecla = document.querySelectorAll(".tecla");

function tocaSom(idAudio) {
    document.querySelector(idAudio).play();

}

let i = 0

for (i; i <= tecla.length; i++) {

    let instrumento = tecla[i].classList[1];
    let som = `#som_${instrumento}`
    tecla[i].onclick = function () {
        tocaSom(som);
    }
}





// Usando addEventListener
/*
const tecla = document.querySelectorAll(".tecla");


for(let i = 0; i <= tecla.length; i++){
    tecla[i].addEventListener("click", function tocar(){
        document.querySelectorAll(".som")[i].play();
    })
}*/








//Usando eventListener para chamar cada um dos elementos separadamente.

/*
document.querySelector(".tecla_pom").addEventListener('click', function tocar(){
    document.querySelector('#som_tecla_pom').play();
})

document.querySelector(".tecla_clap").addEventListener('click', function tocar() {
    document.querySelector('#som_tecla_clap').play();
})

document.querySelector(".tecla_tim").addEventListener('click', function tocar() {
    document.querySelector('#som_tecla_tim').play();
})

document.querySelector(".tecla_puff").addEventListener('click', function tocar() {
    document.querySelector('#som_tecla_puff').play();
})

document.querySelector(".tecla_splash").addEventListener('click', function tocar() {
    document.querySelector('#som_tecla_splash').play();
})

document.querySelector(".tecla_toim").addEventListener('click', function tocar() {
    document.querySelector('#som_tecla_toim').play();
})

document.querySelector(".tecla_psh").addEventListener('click', function tocar() {
    document.querySelector('#som_tecla_psh').play();
})

document.querySelector(".tecla_tic").addEventListener('click', function tocar() {
    document.querySelector('#som_tecla_tic').play();
})

document.querySelector(".tecla_tom").addEventListener('click', function tocar() {
    document.querySelector('#som_tecla_tom').play();
})/*



//Usando JS inline para passar parâmetros e argumentos

/*
function tocar(som){
    som.play();
}*/