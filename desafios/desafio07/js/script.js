var cotacao = parseFloat(window.prompt('Digite o valor do dolar na cotação de hoje?'));

function conversorMoeda(){
    var real = parseFloat(window.prompt("Quantos reais você tem na carteira?"));
    var realConvertido = real / cotacao;

    out = document.querySelector('#saida');

    out.innerHTML = `Com ${real.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} você consegue compra ${realConvertido.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})}`
}