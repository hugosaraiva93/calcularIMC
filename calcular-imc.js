/* IMC
    Muito abaixo do peso 16 a 16,9 kg/m2
    Abaixo do peso 17 a 18,4 kg/m2
    Peso normal 18,5 a 24,9 kg/m2
    Acima do peso 25 a 29,9 kg/m2
    Obesidade grau 1 30 a 34,9 kg/m2 
    Obesidade grau 2 35 a 40 kg/m2 
    Obesidade grau 3 maior que 40 kg/m2 
    */

function calculo(peso, altura){
    if (peso === undefined || altura === undefined){
        throw Error("need two parameters: weight and height")
    }
    return peso / (altura * altura)
}
function classifica(imc){
    if(imc <= 16.9){
        return 'Muito abaixo do peso'
    } else if(imc <= 18.4){
        return 'Abaixo do peso'
    } else if (imc <= 24.9){
        return 'Peso normal'
    } else if (imc <= 29.9){
            return 'Acima do peso'
    } else if (imc <= 34.9){
            return 'Obesidade de grau 1'
    } else if (imc <= 40){
            return 'Obesidade de grau 2'
    } else {
        return 'Obesidade de grau 3'
    }
}

let imc = calculo(65, 1.75)
console.log(imc)
console.log(classifica(imc))
