window.alert('Olá Mundo!');
var nome = window.prompt('Qual o seu nome?');
var idade = parseInt(window.prompt("Qual a sua idade?"));
var salario = parseFloat(window.prompt("Qual o seu salário?"));
var valorDoSteamDeck = parseFloat(window.prompt('Qual o valor atual de um Steam Deck?'))
window.confirm('As informações foram digitadas corretamente?')

typeof nome;
typeof idade;
typeof salario;

document.write(`Olá ${nome.toUpperCase()}, prazer em te conhecer. Você tem ${idade} anos de idade e seu salário atual é de R$ ${salario.toFixed(2)}</br> Um Steam Deck custa atualmente: ${valorDoSteamDeck.toFixed(2)}`);

