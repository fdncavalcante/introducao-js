//console.log("Hello world")

// var myName = "Fer";
// //console.log(myName)

// function sum (a,b) {
//     return a + b
// }
 
// console.log(typeof(sum))

// var num = 1
// console.log(++num)

// const nomes = ["Sophia", "Alexis"]

// for(var i=0; i<nomes.length;i++) {
//     console.log(nomes[i])
// }

// var i=0;
// while(i<nomes.length) {
//         console.log(nomes[i]);
//         i++;
// }

// function sayHello (name) {
//     console.log(`Hello ${name}`)
// }

// sayHello("Fer");

// class Book {
//     constructor(title, author, pages) {
//         this.title = title;
//         this.author = author;
//         this.pages = pages;
// }
//     read() {
//         return `Estou lendo ${this.pages}`
//     }
// }

// let book = new Book('titulo livro', 'Autor livro', 10);
// let otherBook = new Book('kk','kk',20);
// console.log(otherBook.read)

// class Person {
//     constructor(name) {
//         this._name = name;
//     }
//     get name() {
//         return this._name;
//     }
// }

// let person = new Person("Fer");
// console.log(person.name)

let resultado = fizzBuzz(5);
console.log(resultado)

function fizzBuzz (entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if (entrada % 3 === 0) 
        return "Fizz";
    if (entrada % 5 === 0) 
        return "Buzz";

    return entrada;
    
}


