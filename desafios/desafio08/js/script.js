function desconto(){
    var objSaida01 = document.querySelector('#saida01');
    var objSaida02 = document.querySelector('#saida02');


    var produto = window.prompt('Qual o nome do produto que deseja comprar?')
    var preco = parseFloat(window.prompt(`Qual o valor do(a) ${produto}?`))
    var desconto = (preco * 10) / 100;
    var valorFinal = preco - desconto;

    Object.style = 'font-weight bold';
    objSaida01.innerText = `Calculando desconto de 10% para ${produto}`;

    objSaida02.innerHTML = 
    `O preço original era ${preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}<br>
    Você acaba de ganhar ${desconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<br>
    No fim, você  vai pagar ${valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) } no produto ${produto}`


}