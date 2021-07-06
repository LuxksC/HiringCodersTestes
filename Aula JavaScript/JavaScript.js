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

//DO
/*do{
    if (years[i]%2==0){
        console.log("índice com ano par:" + i);
    } else{
        console.log("índice com ano ímpar:" + i);
    }
    i++
} while(i < years.length);*/

//FUNCTION
function introduction (firstName, lastName){
    console.log('Hello ' + firstName + ' ' + lastName)
}

//introduction('Ana', "Clara")

//CLASSES
//Criação de uma classe pai
/*class Games {
    //constructor representa um objeto pertencente a nossa classe
    constructor(title, company, lauchingYear) {
        this.title = title; //(this) --> usado na declaração de uma variável que pertence a classe
        this.company = company;
        this.year = lauchingYear;
    }

    play(){
        return `Estou jogando ${this.title}, criado pela empresa ${this.company} no ano de ${this.year}`;
    }
}

let game = new Games(`Horizon Zero Dawn`,`Guerrilla`, `2012`);

console.log(game);
console.log(game.play());*/

//criação de uma classe filha que herda os atributos da classe pai
/*class apocalipseGames extends Games{
    constructor(title, company, lauchingYear, typeOfApocalipse) {
        super(title, company, lauchingYear); // importação das variáveis da classe pai
        this.typeOfApocalipse = typeOfApocalipse;

    }
    playApocalipse(){
        return `Estou jogando ${this.title}, criado pela empresa ${this.company} no ano de ${this.year} que envolve um tipo de apocalipse ligado a ${this.typeOfApocalipse}`
    }
}

let game02 = new apocalipseGames(`God of War`, `Santa Monica`, 1998, `Deuses`);

console.log(game02.playApocalipse());*/

class variaveisOcultas{
    constructor(name) {
        this._name = name
    }
    
    get name(){
        return this._name
    }

    set name(value){
        this._name = value
    }

}

let person = new variaveisOcultas(`Lucas`)
person.name = `Luxks`
console.log(person.name)