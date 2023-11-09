let hora = new Date();

let objHoras = document.querySelector("#horas");
let objImg = document.querySelector("#imagem")
let objAudio = document.querySelector("#audio")



if (hora.getHours() > 0 && hora.getHours() <12){
    objHoras.innerHTML = `Agora são ${hora.getHours()} Horas da manhã`;
    document.body.style.backgroundColor = '#fee25b';
    objImg.src = "./img/manha.jpg"
    objAudio.src = "./sound/good-morning-life-142546.mp3"
    objAudio.volume = 0.1
} else if (hora.getHours() >= 12 && hora.getHours() <17){
    objHoras.innerHTML = `Agora são ${hora.getHours()} Horas da tarde`;
    document.body.style.backgroundColor = '#b0bfc4';
    objImg.src = "./img/tarde.jpg"
    objAudio.src = "./sound/afternoon-tea-128802.mp3"
    objAudio.volume = 0.1
} else if (hora.getHours() >= 17 && hora.getHours() <= 18){
    objHoras.innerHTML = `Agora são ${hora.getHours()} Horas da tarde`;
    document.body.style.backgroundColor = '#fd8100';
    objImg.src = "./img/final_de_tarde.jpg"
    objAudio.src = "./sound/afternoon-tea-128802.mp3"
    objAudio.volume = 0.1

} else if (hora.getHours() > 18 && hora.getHours() <=24){
    objHoras.innerHTML = `Agora são ${hora.getHours()} Horas da tarde`;
    document.body.style.backgroundColor = '#183355';
    objImg.src = "./img/noite.jpg"
    objAudio.src = "./sound/good-night-160166.mp3"
    objAudio.volume = 0.1
    document.body.style.color ='#ffffff'

}

