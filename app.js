function inverteString(str){
    let palavra = str.split('')
    let palavraSeparada = palavra.reverse()
    let palavrainvertida = palavraSeparada.join('')

    return palavrainvertida
}


console.log(inverteString("banana"))


const numeros = [10,20,30,40,50]

function somaArrays(numeros){
    let soma = 0

    for(let i = 0 ; i < numeros.length; i++){
        soma += numeros[i]
    }

    return soma
}

console.log(somaArrays(numeros))


function somaArrays(numeros){
    let soma = 0

    numeros.forEach(element => soma+=element)

    return soma
}


console.log(somaArrays(numeros))



function maiorNumero(numeros){
    let maiorNumero = numeros[0]

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > maiorNumero){
            maiorNumero = numeros[i]
        }
    }

    return maiorNumero
}

console.log(maiorNumero(numeros))



function maiorNumero(numeros){
   return Math.max(...numeros)
}

console.log(maiorNumero(numeros))



function ehPar(numeros){
    let pares = []
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            pares.push(numeros[i])
        }
    }

    return pares
}

console.log(ehPar(numeros))


function ehPar(numeros){
    
    let pares = numeros.filter(numeros => numeros % 2 === 0)
    

    return pares
}

console.log(ehPar(numeros))

