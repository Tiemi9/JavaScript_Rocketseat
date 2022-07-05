// function expression
// function anonymous

const sum = function(number1, number2){ //parameters dentro dos parenteses
   //console.log(number1 + number2) ===>>> declaração, porém para que não haja repetição, deverá parar a execução da  função com return:
   total = number1 + number2 //se definir a variavel como const, var ou let, a variável total não irá funcionar fora desse bloco ===>>> NÃO É RECOMENDADO, IDEAL É DEFINIR O TIPO DA VARIÁVEL
   return total //para parar a função, em seguida irá retornar o que vem na sequência, nesse caso a variável 'total.
}

//no caso de usar o console.log comentado acima, para chamar a função:
sum(2,3) //arguments 
sum(72, 95)
sum(598, 245413)


let number1 = 34
let number2 = 25


console.log(`O numero 1 é ${number1}`)
console.log(`O numero 2 é ${number2}`)
//se não parar a primeira função com um 'return', irá fazer a soma abaixo sem a interpolação e retornar à primeira função, para que isso não ocorra, deverá "finalizar a função usando um 'return na mesma. ^ "
console.log(`A soma é ${sum(number1, number2)}`) //undefined pois ainda esta construindo a função, 
console.log(total) //'total' só ira rodar se for decalarada após a função rodar (execução acima) 
