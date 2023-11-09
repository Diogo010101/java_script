
function escolher(){
    var nome = document.querySelector('#idnome');
    var saida = document.querySelector('#saida');
    var valor = nome.options[nome.selectedIndex];
    let valorFinal = valor.value;

    switch (valorFinal) {
        case 'Diogo':
            saida.innerHTML = `Você escolheu o nome <strong>${valorFinal}</strong>, ele tem 28 anos ama trabalhar com tecnologia`
            break;
        case 'Joyce':
            saida.innerHTML = `Você escolheu o nome <strong>${valorFinal}</strong>, ela tem 27 anos e atualmente está gostando de decoração de interiores`
            break;
        case 'Peter':
            saida.innerHTML = `Você escolheu o nome <strong>${valorFinal}</strong>, ele tem apenas 4 anos adora desenhar e faz aniversário em 15 de janeiro`
            break;
        case 'Harry':
            saida.innerHTML = `você escolheu o nome <strong>${valorFinal}</strong>, ele tem apenas 1 mês de vida e faz aniversário em 18 de setembro`
            break;
        default:
            saida.innerHTML = `Opção inválida`

            break;



}

}

