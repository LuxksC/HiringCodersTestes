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

//Usando condicionais



var userName = "Ana"
//IF/Else/ElseIF
/*if (userName === "Lucas") {
    console.log("Bem-vindo Lucas")
} else if (userName === "Luxks"){
    console.log("Olá Luxks, você está radiante hoje")
} else {
    console.log("Alerta de intruso, chamando a polícia")
}*/

var password = 123
//Switch
/*switch (password) {
    case "senha":   
        console.log("Senha correta, aproveite");
        break;
    case 123:
        console.log("Melhore sua senha, ainda assim bora!");
        break;
    default:
        console.log("Você está preso ordinário")
}*/

var years = [2021, 2022, 2023, 2024, 2025, 2026];
//for
/*for (var i = 0; i < years.length; i++){
    if (years[i]%2==0){
        console.log("ano par:" + years[i])
    } else{
        console.log("ano impar:" + years[i])
    }
}*/


var i = 0;
//WHILE
/*while (i < years.length){
    if (years[i]%2==0){
        console.log("ano par:" + years[i])
    } else{
        console.log("ano impar:" + years[i])
    }
    ++i 
}*/

do{
    if (years[i]%2==0){
        console.log("índice com ano par:" + i);
    } else{
        console.log("índice com ano ímpar:" + i);
    }
    i++
} while(i < years.length);