/*
     Function() constructor
        * expressão new
        * criar um novo objeto
        * this keyword
 */

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