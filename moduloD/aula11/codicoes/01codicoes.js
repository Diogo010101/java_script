
function corretor(valor){
    var nota = valor.value
    console.log(nota)
    if(nota < 0 || nota > 10){
        nota = 1
    }

}






function media(nome, b1, b2, b3, b4, b5, saida){
    objNome = nome.value;
    bimestre1 = Number(b1.value);
    bimestre2 = Number(b2.value);
    bimestre3 = Number(b3.value);
    bimestre4 = Number(b4.value);
    bimestre5 = Number(b5.value);
    objSaida = saida
    objSaida.style.display = 'block'
    var media = ((bimestre1 + bimestre2 + bimestre3 + bimestre4 + bimestre5) / 5);

    if(media <= 5){
        objSaida.style.color =  '#ff0000'
        objSaida.innerHTML = `O aluno(a) ${objNome} recebeu a média final de: ${media}</br><strong>Reprovado!</strong>`

    }else if (media >=5 && media <=6){
        objSaida.style.color = '#ff6600'
        objSaida.innerHTML = `O aluno(a) ${objNome} recebeu a média final de: ${media}</br><strong>Recuperação!</strong>`

    }else if(media >6 && media <=10){
        objSaida.style.color = '#007700'
        objSaida.innerHTML = `O aluno(a) ${objNome} recebeu a média final de: ${media}</br><strong>Aprovado!(a)</strong>`

    }else{
        objSaida.innerHTML = `Verifique os valores digitados`
    }



}