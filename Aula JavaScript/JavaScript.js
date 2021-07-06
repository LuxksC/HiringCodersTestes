//Variável ligada ao meu nascimento com as 3 formas diferentes//
var day = 22; //Variável global ou de escopo de funções//
let month = "Julho"; //Variável Local//
const year = 1998;

//Diferença entre var e let//
{
    var myName = "Lucas";
    let myAge = 22;
    //console.log(myAge)//
    //console.log(myName)//
}

//console.log(myAge);//
//console.log(myName);//

//Declarando uma variável do tipo objeto
var person1 = {
    "name": "Lucas",
    "age": 22
}

//Declarando um Array
var personArray = [ "Lucas", "Simara", "Genyfer"];
//console.log(personArray+"Ana")

//Declarando uma função
function sum(a,b) {
    return a + b
}
//console.log(sum(2,3));