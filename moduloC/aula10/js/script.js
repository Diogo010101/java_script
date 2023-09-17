/*Main */

var a = window.document.querySelector('#area')
var b = window.document.querySelector("#entrar")
var c = window.document.querySelector(".sair")

a.addEventListener('click', clicar)
b.addEventListener('mouseenter', entrar)
c.addEventListener('mouseleave', sair)




/*Funções */

function clicar(){
    a.innerText = 'Clicou!';
}

function entrar(){
    b.style.background = 'red';
    b.innerText = 'onMouseEnter';
}

function sair(){
    c.style.background = 'green';
    c.innerText = 'onMouseLeave';
}