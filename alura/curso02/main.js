const htmlData = document.querySelector('html');



const imagem = document.querySelector('.app__image');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
const btnGeral = document.querySelectorAll('.app__card-button');

const titulo = document.querySelector(".app__title");
const subtitulo = document.querySelector(".app__title-strong");



//Função para alterar a imagem dinamicamente
function alterarImagem(caminho, objeto, acao){
    imagem.src = caminho;
    htmlData.setAttribute(objeto, acao);
    

}

btnFoco.addEventListener('click',  () => {
    alterarImagem('imagens/foco.png', 'data-contexto', 'foco');
    btnGeral[1].classList.remove('active');
    btnGeral[2].classList.remove('active')
    btnFoco.classList.add('active');
    titulo.innerHTML = `Otimize sua produtividade</br>${subtitulo.innerHTML = `mergulhe no que importa.`}`;
    

});



btnCurto.addEventListener('click', function(){
    alterarImagem('imagens/descanso-curto.png', 'data-contexto', 'descanso-curto');
    btnGeral[0].classList.remove('active');
    btnGeral[2].classList.remove('active');
    btnCurto.classList.add('active');
    titulo.innerHTML = `Que tal dar uma respirada?</br>${subtitulo.innerHTML = `Faça uma pausa curta!`}`;

});

btnLongo.addEventListener('click', function () {
    alterarImagem('imagens/descanso-longo.png', 'data-contexto', 'descanso-longo');
    btnGeral[0].classList.remove('active');
    btnGeral[1].classList.remove('active');
    btnLongo.classList.add('active');
    titulo.innerHTML = `Hora de voltar a superfície.</br>${subtitulo.innerHTML = `Faça uma pausa longa.`}`

});

