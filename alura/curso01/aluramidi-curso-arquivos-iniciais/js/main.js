//Usando função anonima + concatenação de string + função dentro de variavel

const listaTecla = document.querySelectorAll(".tecla");

function tocaSom(elementoAudio) {
    const elemento = document.querySelector(elementoAudio);
    
    if (elemento != null && elemento.localName === 'audio' ){
        elemento.play()
    } else{
        console.log('Elemento Nulo ou Inválido')
    }
    
}


let i = 0

for (i; i < listaTecla.length; i++) {

    const tecla = listaTecla[i];
    const instrumento = tecla.classList[1];
    const som = `#som_${instrumento}`
    tecla.onclick = function () {
        tocaSom(som);
    }

    tecla.onkeypress = function (evento) {
        if (evento.code == 'Enter' || evento.code == 'NumpadEnter'){
            tocaSom(som);
            tecla.classList.add('ativa');
        }else{
            window.alert('Pressione a tecla Enter para tocar')
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
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