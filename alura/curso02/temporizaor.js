const btnPlayPause = document.querySelector("#start-pause");
const imgPlayPause = document.querySelector(".app__card-primary-butto-icon");
const tempo = document.querySelector("#timer");
let tempoDecorridoEmSegundos = 50;
let intervalorDeTempo = null;

function somPlayPause(url){
    const som = new Audio(url);
    som.play();
}

const contagemRegrassiva = () =>{
    if(tempoDecorridoEmSegundos <= 0){
        somPlayPause("./sons/beep.mp3");
        alert('Tempo finalizado!');
        pararIntervalo();
        return;
        
    }else{
        
        tempoDecorridoEmSegundos -= 1;
        tempo.innerHTML = `${tempoDecorridoEmSegundos}`
        console.log(tempoDecorridoEmSegundos);
    }

}


function intervalo() {
    
    
    
    if(intervalorDeTempo != null){
        pararIntervalo();
        imgPlayPause.src = './imagens/play_arrow.png';
        btnPlayPause.childNodes[3].textContent = "Retomar";
        somPlayPause("./sons/pause.mp3");
        console.log(btnPlayPause.childNodes[3]);
        
        return;
    }else{
        imgPlayPause.src = './imagens/pause.png';
        btnPlayPause.childNodes[3].textContent = "Pausar";
        somPlayPause("./sons/play.wav");
        intervalorDeTempo = setInterval(contagemRegrassiva, 1000);
    }
    
}

function pararIntervalo() {
    clearInterval(intervalorDeTempo);
    intervalorDeTempo = null;
}

tempo.innerHTML = `${tempoDecorridoEmSegundos}`




btnPlayPause.addEventListener("click", intervalo);



