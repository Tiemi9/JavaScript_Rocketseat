//Prototype
"words".__proto__ //verificar a cadeia de prototipos
23.0.__proto__ //para números sempre usar casas decimais
true.__proto__ //



//Type Conversion VS Type Coersion
console.log('9' + 5) // irá converter automáticamente o 5 em uma string para que não haja problemas, então irá concatenar os dois números.
console.log(Number('9') + 5) // estamos forçando o JS a considerar como number.



//Strings E Números
//transformando string em number
let string = "123"
console.log(Number(string))

//transformando number em string
let number = 321
console.log(String(number))



//Contando Caracteres e Dígitos
//contando caracteres de uma palavra
let word = "Paralelepipedo"
console.log(word.length)

// contando algoritimos, tranformar em string para isso
let number2 = 123413548486
console.log(String(number2).length)



//Casas Decimais
let number3 = 345.33452345
console.log(number3.toFixed(2).replace(".", ","))



//maiúscula e minúscula
let word2 = "Programar é muito bacana!"
console.log(word2.toUpperCase())
console.log(word2.toLowerCase())



//manipulando strings e arrays

let phrase = "Eu quero viver o Amor!"
//separa cada palavra como um indice de array
let myArray = phrase.split(" ") 
console.log(myArray)
//podemos colocar um parametro, nesse caso a frase será dividida onde existir a letra 'o', e esta não irá aparecer
let myArray2 = phrase.split("o")
console.log(myArray2)
//juntando a frase 
let phraseWithUnderscore = myArray.join(" ")
console.log(phraseWithUnderscore)
//colocando underscore
let phraseWithUnderscore2 = myArray.join("_")
console.log(phraseWithUnderscore2)
//podemos manipular, pois lembrando que se tratando de strings podemos usar várias funcionalidades
let phraseWithUnderscore3 = myArray.join(" ")
console.log(phraseWithUnderscore3.toUpperCase()) //caixa alta



//Criando array com construtor
//criar array com construtor
let myArrays = new Array('a', 'b', 'c')
console.log(myArrays)
//criando um array com 10 posições
let myArrays2 = new Array(10)
console.log(myArrays2)



//elementos do array
//contar elementos de um array, usamos lenght
console.log(["a", "b", "c"].length)
//podemos colocar varios tipos de dados dentro do array e buscar por indice 
console.log([
    "s",
    {type: "array"},
    function() {return "xpto."}
][0])
//podemos manipular as funções que estão dentro do array usando seu indice e invocando-a colocando parenteses após as chaves
console.log([
    "t",
    {type: "array"},
    function() {return "alô."}
][2]())
//podemos chamar a propriedade do objeto, nesse caso 'type' usando.type
console.log([
    "w",
    {type: "array"},
    function() {return "alô."}
][1].type)


//strings para arrays
//transformar uma cadeia de caracteres em elementos de um array
let words = "manipulação"
console.log(Array.from(words))


//manipulando arrays - comentar para verificar as diferenças.
let techs = ["html", "css", "js"]
//adicionar no fim
techs.push("nodejs")
//adicionar no começo
techs.unshift("sql")
//remover do fim
techs.pop()
//remover do começo
techs.shift()
//pegar somente alguns elementos do array, nesse caso estamos executando uma função e não modificando o array como nos exemplos anteriores. É necessario contar todo o array, o primeiro argumento refere-se onde iniciará e o segundo onde terminará.
console.log(techs.slice(1, 3)) 
//remover 1 ou mais itens em qualquer posição do array. Primeiro passa o indice do array e depois quantos quer tirar
techs.splice(0, 2)

//encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)

//a partir dai conseguimos manipular cada elemento do array buscando-o pelo indice.
let index2 = techs.indexOf('nodejs')
techs.splice(index2, 1)

console.log(techs)