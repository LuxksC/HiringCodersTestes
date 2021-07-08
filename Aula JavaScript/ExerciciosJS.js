// ===================== FizzBuzz =================== //
//Divisível por 3 => `Fizz`
// Divisivel por 5 => `Buzz`
// Divisível por 3 e 5 => `FizzBuzz`
// Se não for número => `Não é um número`
// Se não for divisível nem por 3 e nem por 5 => Entrada

/* Minha estarégia de resolução com if*/

//let resultado = fizzBuzz03(3);
//console.log(resultado)

function fizzBuzz01(input) {
    if (typeof(input)!="number") {
        return `Não é um número`

    } else {
        if (input%3==0 && input%5==0) {
            return `FizzBuzz`
        } else if (input%3==0){
            return `Fizz`
        } else if (input%5==0){
            return `Buzz`
        } else{
            return input
        }
    }
}

/* Minha estratégia tentando utilizar Switch */

function fizzBuzz02(input){
    switch (typeof(input)) {
        case "number":
            if (input%3==0 && input%5==0) {
                return `FizzBuzz`
            } else if (input%3==0){
                return `Fizz`
            } else if (input%5==0){
                return `Buzz`
            } else{
                return input
            }
            break;
    
        default:
            return `Não é um número`

    }
}

/*Código desenvolvido na aula*/
function fizzBuzz03(input) {
    if (typeof(input) !== "number")
        return 'Não é um número';
    if ((input%3===0) && (input%5===0))
        return 'FizzBuzz';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';
    return input;
}


//================= Reverse a string ===========

let newStr = 'BANANA'
let resultado = reverseString02(newStr)
console.log(resultado)
//console.log(newStr[0] + newStr[newStr.length-1])

/*Minha resolução com FOR */
function reverseString01(string) {
    var revStr = string[string.length-1]
    for (let i = string.length-2; i >=0; i--) {
        var revStr = revStr + string[i];
    }
    return revStr
}
/*Resolução capaz de demonstrar cada interação*/
function reverseString02(string) {
    var revStr = ''
    for (let i = string.length-1; i >=0; i--) {
        revStr += string[i];
        console.log(revStr)
    }
}