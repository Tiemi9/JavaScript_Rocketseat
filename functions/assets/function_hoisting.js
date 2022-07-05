// function hoisting
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
