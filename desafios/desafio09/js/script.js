function reajusteSalario(){
    var nome = window.prompt("Qual o nome do funcionário?");
    var salario = parseFloat(window.prompt('Qual o salario do funcionario, utilize apenas números e ponto (.)'));
    var porcentagem = parseFloat(window.prompt('Qual a porcentagem de ajuste, utilize apenas numeros'));
    var valorAjuste = salario * porcentagem / 100;
    var novoSalario = salario + valorAjuste;
    var objSaida = document.querySelector('#saida');
    var objSaida2 = document.querySelector('#saida2');

    objSaida.style.fontWeight = 'bold';
    objSaida.style.fontSize = '2em';
    objSaida.innerHTML = `${nome.toUpperCase()} recebeu um aumento salarial!`
    objSaida2.innerHTML = `Salario antes do ajuste: ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}<br>
    Valor do ajuste: ${valorAjuste.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }, que corresponde a ${porcentagem}%<br>
    Novo salário: ${novoSalario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }`

}