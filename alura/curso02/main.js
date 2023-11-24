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
        break;
        case'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?,<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            btnCurto.classList.add('active');
        break;

        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície,<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            btnLongo.classList.add('active');
        break;
        default:
            break;
    }
    

}

//Botões para cada uma das telas

btnFoco.addEventListener('click',  () => {
    alterarImagem('imagens/foco.png', 'data-contexto', 'foco');
    
});


btnCurto.addEventListener('click', function(){
    alterarImagem('imagens/descanso-curto.png', 'data-contexto', 'descanso-curto');
    
});


btnLongo.addEventListener('click', function () {
    alterarImagem('imagens/descanso-longo.png', 'data-contexto', 'descanso-longo');
});

