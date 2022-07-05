// FUNCTION SCOPE

//não atribuindo valor à variável:
let subject

function creatThink(subject) { //lembrando que o 'subject' paramentro não é o mesmo 'subject' variavél
    return subject
}

console.log(creatThink(subject)) //irá retornar undefined pois não esta definido



//atribuindo valor à variável
let subject2 = 'create video'

function creatThink2(subject2) { //lembrando que o 'subject' paramentro não é o mesmo 'subject' variavél
    return subject2
}

console.log(subject2) //retorna 'creat video'
console.log(creatThink2(subject2)) //retorna 'creat video'



//reatribuindo valor da variável
let subject3 = 'create video'

function creatThink3(subject3) { //lembrando que o 'subject' paramentro não é o mesmo 'subject' variavél
    subject3 = 'study' //não é uma reatribuição do valor da variável, pois está dentro do escoppo da função.
    return subject3
}

//não importa a ordem que forem chamadas a seguir retornara a mesma coisa
console.log(subject3) //retorna 'creat video'
console.log(creatThink3(subject3)) //restorna 'study' pois aqui a função foi chamada
console.log(subject3) //retorna 'creat video'



//caso não coloque nenhum parametro
let subject4 = 'create video'

function creatThink4() {
    subject4 = 'study' //nesse caso é reatribuido, sobrescreve a variável declarada acima, busca do scope anterior
    return subject4
}

console.log(subject4) //retorna 'creat video' antes de ser reatribuido
console.log(creatThink4(subject4)) //restorna 'study'
console.log(subject4) //retorna 'study' pois foi reatribuido, 



//caso variavél não seja definida e não haja paramentro na função
let subject5

function creatThink5() {
    subject5 = 'study'
    return subject5
}

console.log(subject5) //retorna undefined pois não foi declarado
console.log(creatThink5()) // retorna 'study' pois está invocando a função
console.log(subject5)// retorna 'study' pois foi reatribuido na função já que não há parametro definido.



//caso variavél não seja definida, não haja paramentro na função e não haja return
let subject6

function creatThink6() {
    subject6 = 'study'
    
}

console.log(subject6) //retorna undefined pois não foi declarado
console.log(creatThink6()) // retorna undefined pois sem return não irá retornar nada - ja que não há retorno nem precisa ser invocada
console.log(subject6)// retorna 'study' pois foi reatribuido na função já que não há parametro definido.

