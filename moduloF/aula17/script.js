let  pessoa = {nome:"",idade: 0, altura: 0, cadastro(n, i, a){
    nome = n;
    idade = i;
    altura = a;
},apresentar(){
    console.log(`Ola meu nome é ${nome}, tenho ${idade} anos e ${altura} de altura`)
} }


pessoa.cadastro("Diogo", 29, 1.83)

pessoa.apresentar()

