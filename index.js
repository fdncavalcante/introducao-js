//1
console.log("Desafio 1")</br>
let nomeCompleto = "Fernanda Cavalcante";
console.log(nomeCompleto)

//2
var numeroA = 5;
var numeroB = 10;
var resultado = numeroA*numeroB;
console.log(resultado) 

//3
function saudacao () {
    return "Oi eu sou o Goku"
}

console.log(saudacao());

//4
function multiplica (a,b) {
    return a*b
}
console.log(multiplica(5,5))

//5

function podeDirigir (num) {
    if (num >=18) {
        return"Você pode dirigir"
    } else {
        return "Você não pode dirigir"
}
};
console.log(podeDirigir(17));

//6
for (let i=0; i<=20; i++) {
    console.log(i);
}

//7 
for (let i=0; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

//8
function tabuada (num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num*i}`)
}
}
tabuada(5)

//9
function converterEmHoras (minutos) {
    return minutos /60 + " horas"
}
console.log(converterEmHoras(600));



