# MANIPULANDO DADOS

## Prototype

Protótipo é algo que foi criado antes. É uma caracterisctica do JavaScript que se baseia em uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objeto.

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

