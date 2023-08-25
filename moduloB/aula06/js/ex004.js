var nome = window.prompt("Digite o seu primeiro nome")
var salario = Number.parseFloat(window.prompt("Digite o seu salário"))
document.writeln(`Olá ${nome.toUpperCase()}. Seu nome tem ${nome.length} letras<br/>`)

document.writeln(`${nome}, de acordo com as informações fornecidas, seu salário é de ${salario.toFixed(2)}<br/>`)
document.writeln(`${nome}, de acordo com as informações fornecidas, seu salário é de ${salario.toFixed(2).replace(".", ",")}<br/>`)
document.writeln(`${nome}, de acordo com as informações fornecidas, seu salário é de ${salario.toFixed(5)}</br>`)
document.write(`${nome.toUpperCase()} de acordo com as informações fornecidas, o seu salário atual é de ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)

