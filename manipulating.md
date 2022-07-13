# MANIPULANDO DADOS

## Prototype

Protótipo é algo que foi criado antes. É uma caracterisctica do JavaScript que se baseia em uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidos como objeto.

Podemos acessar as funcionalidades objetos com um '.' (ponto), por exemplo: 

"name".lenght (irá contar o número de caractéres)

11.3.haOwnProperty (irá indicar que é uma função, então deverá colocar parenteses no final, retornará um boolean)

* prototype-based language (JS é baseada em protótipos)
* prototype chain (cadeia, criamos um objeto sem nenhuma propriedade, então irá pegar referencias do objeto acima)
* _proto_ (propriedade que foi criada referenciando outro objeto, acendente, conseguimos ver várias funcionalidades e propriedades)

A maioria dos dados no JS são encapsulados por um objeto, ou seja, eles vão herdar toda a cadeia de protótipos.

```js
"words".__proto__ //verificar a cadeia de prototipos
23.0.__proto__ //para números sempre usar casas decimais
true.__proto__ //
```


## Type Conversion VS Type Coersion

* Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, é pode ser feita de diversas maneiras, por exemplo com o método Number().
* Type coersion é uma mudança de tipos feita pelo próprio JS, implicitamente, por exemplo quando tentamos somar um númeto na forma de string com um número do tipo number.

    Type conversion (typecasting - nossa capacidade de causar uma conversão) vs Type coersion (capacidade do JS de realizar uma troca)

    * Alteração de um tipo de dado para outro tipo

```js
console.log('9' + 5) // irá converter automáticamente o 5 em uma string para que não haja problemas, então irá concatenar os dois números.
console.log(Number('9') + 5) // estamos forçando o JS a considerar como number.
```

## Strings Em Números

É possivel transformar númeos em formato de string através do método Number() e números em formato number em string usando o método String().

```js
//transformando string em number
let string = "123"
console.log(Number(string))

//transformando number em string
let number = 321
console.log(String(number))
```


## Contando Caracteres e Dígitos

Para contar a quantidade de caracteres em uma string é possível usar o método lenght(), também é possível contar a quantidade de algarismos em um númeto transformando o número em string e usando o mesmo método.

```js
//contando caracteres de uma palavra
let word = "Paralelepipedo"
console.log(word.length)

// contando algoritimos, tranformar em string para isso
let number = 123413548486
console.log(String(number).length)

```


## Casas Decimais

Para determinar uma quantia de casas decimais de número pode-se usar o método toFixed() colocando como argumento quantas casas decimais o número terá.
Para mudar a formatação do número separado por ponto para separado por virgula, é possível usar o método replace(".", ","). O resultado final será do tipo string e a conversão para o tipo número não será possivel porque a virgula não é considerada parte de um número, nem forçando com o método Number().

* Quando usamos o método toFixed(), transformamos em string devido a vírgula.
* Quando o objeto é do tipo string podemos atrelar várias funcionalidades à ele separados por ponto (.).

```js
// transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula (se torna string)
let number = 345.33452345
console.log(number.toFixed(2).replace(".", ","))
```


## Maiúsculas e Minúsculas

Para transformar uma string em letras maiúsculas pode-se usar o método toUpperCase(), e ao contrário toLowerCase().

```js
let word = "Programar é muito bacana!"
console.log(word.toUpperCase())
console.log(word.toLowerCase())
```


## Separando strings

Para separar um texto por espaços, pode se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o métodojoin(""), que juntaria essas palavras sem nenhum separador, porém colocando um argumento no caso um underscore (join("_")) as palavras são juntadas com o argumento separador.

```js
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
```


## Criando Array Com Construtor

Para criar um array com um método construtor, usa-se new Array(args), passando como argumento o tamanho deste vetor ou os valores, por exmplo: const array = new Array("a", "b", "c").

```js
//criar array com construtor
let myArrays = new Array('a', 'b', 'c')
console.log(myArrays)
//criando um array com 10 posições
let myArrays2 = new Array(10)
console.log(myArrays2)
```


## Encontrando palavras em uma frase

Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser encontrada. Teremos um resultado boleano, true para caso encontre e false caso não.
Lembrando que esse é um método case sentive.

```js
let phrases = "Eu quero viver"
console.log(phrases.includes("amo"))
```



## Elementos do Array

Para contar a queantidade de elementos de um array podemos usar o método lenght().

```js
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
```


## Strings Para Arrays

Para transformar uma string em um array, podemos usar o objeto Array com o método from(), passando como argumento a string a ser transformada em array. por exemplo: console.log(Array.from("developer"))

```js
//transformar uma cadeia de caracteres em elementos de um array
let words = "manipulação"
console.log(Array.from(words))
```



## Manipulando Arrays

Existem várias formas de manipular arrays, como: 

* método push() que adiciona um elemento ao final do array, 
* método unshift() que adiciona um elemento no começo do array,
* método pop() que retira um elemento do final do array,
* método shift() que retira um elemento do começo do array,
* método slice() que recebe como argumentos a posição de início e a posição do fim da parte que queremos selecionar e retorna os valores destas posições.
* método splice() que recebe como argumentos a posição de início e a quantidade de elementos que queremos remover,
* método indexOff() que encontra o index do valor que recebe como argumento em um array.

```js
//manipulando arrays
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
```
