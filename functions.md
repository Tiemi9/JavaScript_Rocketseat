# FUNCTIONS

## Para que serve a function?

Uma function é um tipo de dado estrutural.

* Agrupa um bloco de código a ser executado
* Armazena o código em memória para ser usado posteriormente
* Explica o que o pedaço do código está fazendo, dá significado
* Permite reutilizar o código quantas vezes necessário

## Como criar uma function?

* Fazendo uma declaration (function statment ou function declaration):
    function nomeDaFuncao(parametros) {
        declaração
    }
* Está armazenando a função para ser eecutada.

## Como executar a function?

* Executar a função: rodar, chamar, invocar - execute, run, call, invoke.
* Chamar pelo nome com parenteses:
     nomeDaFuncao();



# AGRUPAMENTOS E PARÂMETROS

É possível declarar funções dentro de variáveis.
* criando parametros que irão receber os argumentos da função
* function expression, function anonymous (não tem nome)
    const variavel = function(parametros) {
        declaração
    }
    variavel(argumentos);

* Por baixo dos panos, é como se os paramentros fossem varáveis e os argumentos os valores dessas variáveis, tipo:
    const variavel = function(parametro1, parametro2) {
        let parametro1 = 1
        let parametro2 = 2
    }
    variavel(1, 2);
Porém não será possivel usar os parâmetros fora da função, irá dar erro de referência:
 const variavel = function(parametro1, parametro2) {
        let parametro1 = 1
        let parametro2 = 2
    }
    console.log(parametro1) ===>>> NÃO FUNCIONA FORA DA FUNÇÃO
    variavel(1, 2);



# RETORNANDO VALORES DENTRO DA FUNCTION

Para que não haja problemas, é necessario parar a função para que não dê conflito ao longo do código, para isso usamos a palavra reservada 'return'.
Caso não use o return dentro da função, a mesma retornará undefined.

* Deverá ser declarada dentro do escopo da função
* Irá parar a função e executar o que estiver na sequencia do código
* Podemos definir os argumentos da função atraves de variáveis declaradas na sequencia (let, var)
* Na declaração da função irá criar e retonar uma variável que recebrá os parametros
* Esta variável deverá ser especificada (let, var, const)
* A não especificação dessa variável poderá gerar conflitos futuros
* Poderá usar a função em uma interpolação
* A variável definida dentro da função poderá ser chamda fora do escopo caso o tipo da variável não seja definido, porém não é recomendado.

## Exemplo:

```js
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

//esses number1 e number2 não são o mesmo que estão no parametro da função acima
let number1 = 34
let number2 = 25

console.log(`O numero 1 é ${number1}`)
console.log(`O numero 2 é ${number2}`)
//se não parar a primeira função com um 'return', irá fazer a soma abaixo sem a interpolação e retornar à primeira função, para que isso não ocorra, deverá "finalizar a função usando um 'return na mesma. ^ "
console.log(`A soma é ${sum(number1, number2)}`) //undefined pois ainda esta construindo a função, está entrando dentro da função 
console.log(total) //'total' só ira rodar se for decalarada após a função rodar (execução acima) e sem definir qual o tipo da variável dentro da função 
```

No exepmlo acima: a função é declarada, é invocada na interpolação, começa executar, realiza o registro dos parametros, coloca dentro da variável, depois ele procura pela linha return e retona o total então pára e retorna o que vem na sequencia. Nesse caso as variáveis. number1 e numebr2.



# OUTRA MANEIRA DE ENTEDER AS FUNCTIONS

A função pode ser uma caixa mágica....
Imagine que a função é um liquidificador, iremos fazer um suco:
* Colocamos as frutas no liquidificador, e após bater precisaremos de um copo para tomá-lo, então chamaremos o copo para apresentar o suco:

```js
function makeJuice(fruit1, fruit2) {
    return fruit1 + fruit2
}

const glass = makeJuice('banana', 'maçã')

console.log(glass)
```


# FUNCTION SCOPE

cada função cria um escopo, as variáveis definidas dentro da mesma não poderão ser usadas fora dela.
* É possível reatribuir o valor de uma variável dentro do escopo da função para ser usada pela mesma, fora da dunção manterá o valor que foi atribuido antes da função ser invocada.
* Quando não há parametros na função então o valor reatribuido dentro do escopo, será reatribuido, também, fora dela, após ser invocada.
* Desntro do escopo da função inserimos o return para que possamos retornar o valor da função e parar a mesma.

Muitas vezes nos deparamos com variáveis que tem o mesmo nome de paramentros da função, por isso é necessario atenção.
```js
let subject

function creatThink(subject) { //lembrando que o 'subject' paramentro não é o mesmo 'subject' variavél
    return subject
}

console.log(creatThink(subject)) //irá retornar undefined pois não esta definido
```

Ao atribur um valor a variável:
```js
let subject2 = 'create video'

function creatThink2(subject2) { //lembrando que o 'subject' paramentro não é o mesmo 'subject' variavél
    return subject2
}

console.log(subject2) //retorna 'creat video'
console.log(creatThink2(subject2)) //retorna 'creat video'
```

Colocando a variável dentro da função para reatribuir o valor dentro dela
```js
let subject3 = 'create video'

function creatThink3(subject3) { //lembrando que o 'subject' paramentro não é o mesmo 'subject' variavél
    subject3 = 'study' //não é uma reatribuição do valor da variável, pois está dentro do escoppo da função.
    return subject3
}

//não importa a ordem que forem chamadas a seguir retornara a mesma coisa
console.log(subject3) //retorna 'creat video'
console.log(creatThink3(subject3)) //restorna 'study' pois aqui a função foi chamada
console.log(subject3) //retorna 'creat video'
```


Sem paramentro da função, então irá reatribuir o valor dentro e fora da função:
```js
let subject4 = 'create video'

function creatThink4() {
    subject4 = 'study' //nesse caso é reatribuido, sobrescreve a variável declarada acima, busca do scope anterior
    return subject4
}

console.log(subject4) //retorna 'creat video' antes de ser reatribuido
console.log(creatThink4(subject4)) //restorna 'study'
console.log(subject4) //retorna 'study' pois foi reatribuido, 
```

Se a variável não for definida e não haja parametro na função, porém atribua valor á variável dentro da função, então:
```js
let subject5

function creatThink5() {
    subject5 = 'study'
    return subject5
}

console.log(subject5) //retorna undefined pois não foi declarado
console.log(creatThink5()) // retorna 'study' pois está invocando a função
console.log(subject5)// retorna 'study' pois foi reatribuido na função já que não há parametro definido.
```


caso variavél não seja definida, não haja paramentro na função e não haja return:
```js
let subject6

function creatThink6() {
    subject6 = 'study'
    
}

console.log(subject6) //retorna undefined pois não foi declarado
console.log(creatThink6()) // retorna undefined pois sem return não irá retornar nada - ja que não há retorno nem precisa ser invocada
console.log(subject6)// retorna 'study' pois foi reatribuido na função já que não há parametro definido.
```


# FUNCTION HOISTING

A função realiza hoisting, ou seja, podemos chamar a função antes mesmo de declara-la.
Porém não irá funcionar se a função for declarada dentro de uma variável:
```js
 sayMyName()
 function sayMyName() {
    console.log('Cris')
 }

 // o hoisting só irá funcionar se a function não estiver dentro de uma variável:
 // não irá rodar:
 sayMyName1()
 const sayMyName1 = function() {
    console.log('Anderson')
 }
// nem com var.... e nem colocar parametro na função
```


# ARROW FUNCTION

Podemos simplificar a declaraçãode uma função da seguinte forma:
```js
const sayMyName = () => {
    console.log('Cris')
}

sayMyName()

//com parametros:
const sayMyName1 = (name) => {
    console.log(name)
}

console.log('Bete')
```


# CALLBACK FUNCTION

É uma função que está passando como parâmetro, outra função.

```js
// callback function
function sayMyName(name) {
    console.log(name)
}

//podemos passar qualquer tipo de dados, string, number, object e function
sayMyName('Cris')
sayMyName(9)
sayMyName({name: 'Cris'})
sayMyName(
    () => {
        console.log('estou em uma callback')
    }
) // aqui irá retonar a função, objeto


//callback é uma função que está passando como parametro para outra função
function sayMyName1(name1) { //estamos passando uma função para esse 'name'.
    console.log('antes de executar a calback')//verificar no console que aqui é só uma chamada
    name1() //podemos executar essa função que estamos passando
    console.log('depois de executar a callback')// mesmo com  callback a função segue funcionando normalmente, executando o que vem antes e depois
}

sayMyName1( //passando a função 
    () => {
        console.log('estou em uma callback')
    }
)

//é como se fizessemos isso:
function sayMyName2(name2) { 
    console.log('antes de executar a calback')
    
    function name2() { //não pode ser arrow function como é acima
        console.log('estou em uma callback')
    }
    name2() 

    console.log('depois de executar a callback')
}

sayMyName2()
```


# FUNÇÕES CONSTRUTORAS

São utilizadas para criar novos objetos e geralmente tem sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra chave _'this'_ para se referir ao objeto sendo criado.

* Function() constructor
    * expressão new
    * criar um novo objeto
    * this keyword
    
```js
//declarando uma função construtora:
function Person() {

}
//declarando uma variável - criando uma nova Person
const cris = new Person("Cris") // new seguido da função se torna uma função construtora

//chamando a variável verá um objeto do tipo Person
console.log(cris)

//palavra reservada this
function Person2(name) { //passando name como parametro da função
    this.name = name //this refere-se a variável andy que está la fora
    //fazendo uma funcionalidade no objeto criado: 
    this.walk = function() {
        return this.name + " está andando"
    }
}

//instanciando um novo objeto:
const andy = new Person2("Anderson") //passando anderson como um novo argumento
const bete = new Person2("Elizabete")

console.log(andy) //essa variável agora tem uma propriedade chamada name
console.log(bete.walk())//essa variável está recebendo a função criada acima


//Existem várias funções construtoras, por exemplo:
//função construtora string
let name2 = new String("Ana")
console.log(name2) //irá mostrar uma cadeia de caractéres desse objeto

let date = new Date("2022-07-07")
console.log(date) //irá mostrar data e horario local
```

