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