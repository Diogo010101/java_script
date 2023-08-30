function troco(){
    var produto = window.prompt('Qual o nome do produto que você deseja comprar?')
    var valor = parseFloat(window.prompt(`Quanto custa ${produto} que você está comprando`))
    var valorPago = parseFloat(window.prompt(`Qual foi o valor que você deu para pagar o ${produto}?`))
    var troco = valorPago - valor
    window.alert(`Você comprou ${produto} que custa ${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}\nDeu ${valorPago.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em dinheiro e vai receber ${troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de troco.\nVolte sempre!`)
}