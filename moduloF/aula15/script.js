var nomes = ['diogo','joye','peter','harry'];

console.log(nomes);
console.log(nomes[2]);

nomes[4] = 'luna'

console.log(nomes);

nomes[0] = 'DIOGO'

console.log(nomes);

nomes.push("killua")

console.log(nomes);

console.log(nomes.length)

nomes.sort()

console.log(nomes);

nomes.forEach(nome =>{
    console.log(nome)
})

posicao = 1
for(i=0; i<= nomes.length; i = i+1){
    
    console.log(`${posicao}º ${nomes[i]}`)
    posicao = posicao +1
}

for(let i in nomes){
    console.log(nomes[i])
}

console.log(nomes.indexOf('dIOGO'))
