# A IMPORTÂNCIA DA SINTAXE

* toda linguagem tem sintaxe
* uma boa comunicação necessita de uma boa sintaxe
* 82% dos erros para iniciantes em programação

exemplo de sintaxe correta:

``` js
console.log("Bem vindos ao Starter")
```

# TIPOS DE DADOS

* Gramática
    * Elementos da linguagem e suas combinações
    * A arte de falar e escrver corretamente

* Vocabulário
    *conjunto de termos e expressões
    * Agrupamento de palavras

* Precisamos saber como escrever
* Precisamos saber os significados
* Precisamos continuar aprendendo, para crescer nosso vocabulário

## como vai ser a dinâmica do aprendizado?

* Conceitos e escrita

> Vamos aprender os tipos de dados mais utilizados na linguagem
 * Voce sabia que é prossível aprender 80% de uma lingua nova, com cerca de 20% do vocabulário? (Até menos)

# STRINGS

* Cadeia de caractéres

"" aspas duplas (define caracteres como strings)
'' aspas simples (define caracteres como strings, pode ser usado quando for necessario colocar aspas na frase a ser exibida)
`` crase - template literal ou template strings (é posssivel concatenar strings com outras expressoes de linguagem e outras strings (${}), e podemos fazer multilinhas)

## Exemplos:
```js
console.log("Cris");
console.log("Cris'''");
console.log('Cris');
console.log('Cris"s2')
console.log(`Cris`)
console.log(`Cris " ' " '`)
Console.log(`
    
    Cris
    
    `)
console.log(`Cris ${1 + 1}`)
```

# NUMBERS

* Tipos:

- Inteiros (positivos ou negativos -33 ou 33)
- Reais (frações12.5)
- Not a Number (NaN)
- Infinito (infinity)

## Exemplos
```js
console.log(33)
console.log(-33)
console.log(12.5)
console.log(12.5 + 33)
console.log(12.5 / 3)
console.log(12.5 / "string")
console.log(12,5 === Infinity) //smpre com letra maiúscula - boleano
```

# BOLEANOS

* Somente dois valores: 
- true;
- false.

## Exemplos
```js
console.log(true)
console.log(false)
```

# UNDEFINED & NULL

* Undefined 
    - indefinido

* Null 
    - nullo
    - objeto que não possui nada dentro
    - diferente de definido

```js
console.log(undefined)
console.log(null)
console.log(undefined === null)
```

# OBJECT

* Objeto
* Propriedades / Atributos
* Funcionalidade / Método

{ propriedade: "valor"}

```js
console.log({
    name: "Cris",
    idade: 36,
    andar: function() {
        console.log('andar')
    }
})
```

# ARRAY

* Vetores
    * Uma lista
    * Agrupamento de dados

["Cris", 36]

```js
console.log([
    "Cris", 36
])

console.log([
    "Cris", 
    36
])

console.log([
    "Cris",
    "Cris",
    "Cris"
])

console.log([
    "Cris",
    2,
    3
])
```

# TIPOS DE DADOS

Conforme ECMAScript (padroniza o JavaScript) standard temos 9 tipos de dados:

* Data Types
    * Primitive / Primitive Value
    * Structural
    * Structural Primitive

## Primitivos 
Não sofrem alterações, sempre será o que é.

* String
* Number
* Boolean
* Undefined
* Symbol
* BigInt

## Estruturais
Tem uma estrutura, recebe propriedades (atributos) e funcionalidades.

* Derivados de Object
    * Array
    * Map
    * Set
    * Date
    * ... (verificar doc: Standard Built-in Object)

* Function

# Estrutural Primitivo / Structural Root Primitive
É ao mesmo tempo primitivo e estrutural, pois define que deveria ter um objeto, mas não tem. 

* null

# VARIÁVEIS

* Nomes simbólicos para receber algum valor (tipos de dados)
* Atalhos de código
* Identificadores
* 3 paalvras reservadas para criar uma variável:
    * var
    * let
    * const

```js
    //var
    var clima = "Quente"
    clima = "Frio"

    console.log(clima)

    //let
    let tempo = "Quente"
    tempo = "Frio"

    console.log(tempo)

    //const
    const temperatura = "Quente"
    //temperatura = "frio" //não é possivel reatribuir o valor 

    console.log(temperatura)
```

# TIPOS DINÂMICOS

O JvaScriapt é uma linguagem fracamente tipada e dinâmica:
    - váriaveis não precisam ter um tipo previamente definido
    - podemos mudar o condeúdo da variável (exceto para const)
    - o tipo será definido ao atribuir um valor à variável

## Exemplo
```js
 let variavel = ""
    console.log(typeof variavel) ///typeof para descobrir qual o tipo de dado.

    let variavle2 = 5
    console.log (typeof variavle2)

    let variavel3 = true
    console.log(typeof variavel3)
    
    let variavel4 = false //era boolean
    variavel4 = "" //virou string
    console.log(typeof variavel4)
``` 	

   * Linguagens fortemente tipadas
    - nesse caso ao atribuir o tipo string não poderemos usar outro tipo de dado. Estática 

## Exemplo
   > let variavel:String = "" 
     

# SCOPE & VAR

## Scope
 * Determina a visibilidade de alguma variável no JS

## Block Statement
```js
// vamos iniciar um bloco
{
    //aqui dentro é um bloco e posso colocar qualquer código

} //aqui fechamos o bloco
```
O bloco também criará um novo scopo. Chamamos de 'block-scoped'.

## Var
- var é global e poderá funcionar fora de um escopo de bloco
- Faz HOISTING 

```js
console.log('> existe x antes do bloco?', x)

{
    var x = 0
}

console.log('> existe x antes do bloco?', x)
```


# SCOPE LET & CONST

- const e let são locais e só funcionam no escopo onde foi criada
- Não fazem HOISTING
- Delcaradas fora e dentro do escopo também funcionam
- Caso a variavel seja redeclarada dentro do bloco, então dentro e fora do bloco serão reatribuidos, independente de quantos escopos tem antes
- Apesar de const não poder ser reatribuida ou redeclarada, quando esta dentro do escopo é considerado outra variavél.

```JS
//LET
{
    let t = 9
    console.log('> existe t', t)
}

//variavél delcarada fora e dentro do escopo também funciona
let c = 0
{
    let c = 10
    console.log('> existe c', c)
}
console.log('> existe c depois do bloco?', c)

let g = 6
{
     g = 12
    console.log('> existe g', g)
}
console.log('> existe g depois do bloco?', g)


//CONST
const h = 3
{
    const h = 33
    console.log('> existe h?', h)
}
console.log('> existe h depois do bloco?', h)
```


# NOMEANDO VARIÁVEIS

## Para criar nomes

* js é case-sentive (sensível ao caso)
* js aceita a cadeia de caractéres Unicode

- Posso:
    * Iniciar com esses caracteres especiais: $ _
    * Iniciar com letras
    * Colocar acentos
    * Letras maíusculas e minúsculas fazem diferença

- Não posso:
    * Iniciar com números
    * Colocar espaços vazios no nome

- Ideal:
    * Criar nomes que fazem sentido
    * Que explique o que a variável faz ou é
    * camelCase
    * snake_case
    * Escrever em inglês