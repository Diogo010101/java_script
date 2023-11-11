var pizza = 8;
console.log(`A pizza tem ${pizza} pedaços\n`)

/*
while(pizza > 0){
    pizza -= 1;
    console.log(`Você Comeu uma fatia \nRestam ${pizza}`)
}
console.log(`A pizza acabou`)*/

do{
    pizza -= 1;
    console.log(`Você Comeu uma fatia \nRestam ${pizza}`)
} while (pizza > 0);

console.log(`A pizza acabou`)


