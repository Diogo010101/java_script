const htmlData = document.querySelector('html');
const imagem = document.querySelector('.app__image');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
const btnGeral = document.querySelectorAll('.app__card-button');
const titulo = document.querySelector(".app__title");
const tocarMusica = document.querySelector("#alternar-musica");
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;



//Vaiaveis do Temporizador
const btnPlayPause = document.querySelector("#start-pause");
const imgPlayPause = document.querySelector(".app__card-primary-butto-icon");
const tempoNaTela = document.querySelector("#timer");
let tempoDecorridoEmSegundos = 1500;
let intervalorDeTempo = null;
//Vaiaveis do Temporizador FIM




//Evento para tocar a pausar a musica usando o botão de checkbox
tocarMusica.addEventListener("click", () =>{
    if (tocarMusica.checked == false) {
        musica.pause();
    } else {
        musica.play();
    }
})





//Função para alterar a imagem dinamicamente
function alterarImagem(caminho, objeto, acao){
    imagem.src = caminho;
    htmlData.setAttribute(objeto, acao);
    for(let i = 0; i < btnGeral.length; i++){
        btnGeral[i].classList.remove('active');
    }

    switch(acao){
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            btnFoco.classList.add('active');
            tempoDecorridoEmSegundos = 1500
        break;
        case'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?,<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            btnCurto.classList.add('active');
            tempoDecorridoEmSegundos = 300
        break;

        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície,<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            btnLongo.classList.add('active');
            tempoDecorridoEmSegundos = 900
        break;
        default:
            break;
    }
    

}

//Botões para cada uma das telas

btnFoco.addEventListener('click',  () => {
    alterarImagem('imagens/foco.png', 'data-contexto', 'foco');
    mostrarTempo()
    
});


btnCurto.addEventListener('click', function(){
    alterarImagem('imagens/descanso-curto.png', 'data-contexto', 'descanso-curto');
    mostrarTempo()
    
});


btnLongo.addEventListener('click', function () {
    alterarImagem('imagens/descanso-longo.png', 'data-contexto', 'descanso-longo');
    mostrarTempo()  
});
//Botões para cada uma das telas FIM







//Código para o temporizador
function somPlayPause(url) {
    const som = new Audio(url);
    som.play();
}

const contagemRegrassiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        somPlayPause("./sons/beep.mp3");
        tocarMusica.checked = false;
        musica.pause();
        alert('Tempo finalizado!');
        pararIntervalo();
        return;

    } else {

        tempoDecorridoEmSegundos -= 1;
        mostrarTempo()
    }

}


function intervalo() {



    if (intervalorDeTempo != null) {
        pararIntervalo();
        imgPlayPause.src = './imagens/play_arrow.png';
        btnPlayPause.childNodes[3].textContent = "Retomar";
        somPlayPause("./sons/pause.mp3");
        console.log(btnPlayPause.childNodes[3]);

        return;
    } else {
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

/*
Primeiro o new Date é uma classe do JS, instanciamos ela dentro da constante "tempo", por isso ela vai receber os métodos da classe Date, então fazemos o * 1000,  para transformar os milissegundos em segundos.

Criamos outra constante tempoFormatado que vai receber o tempo convertido para os parâmetros minute com dois digitos e second com dois dígitos.
Depois basta chamas o inner html.

Devemos informar o valor que queremos em segundos e ele vai converter para minutos.

*/

function mostrarTempo(){
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString("pt-br",{minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}


btnPlayPause.addEventListener("click", intervalo);


mostrarTempo()
//Código para o Temporizador FIM

