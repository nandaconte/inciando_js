// Comparações
console.log(5 <= 5)
console.log(5 < 5)
console.log (5 >= 5)
console.log (5 == 5)
console.log (5 != 5)
console.log (5 == "5") // não está diferenciando o tipo de dados
console.log(5==="5")
console.log(5!="5") // não são diferentes pois não está especificando o tipo de dado
console.log(5!=="5") // são diferentes pois está sendo especificado o tipo de dados

// 

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
// &&: para que uma solução seja verdadeira ambas devem ser veradeiras

console.log(true || true)
console.log(true || false)
console.log(false|| true)
console.log(false|| false)

// or^^

let idade = 50;
console.log(`A idade é: ${idade}`)

// let a = 10,
//     b =50,
//     c=70;

//     console.log(a,b,c)
//     console.log(`As idades são: ${a} ${b} ${c}`)

// let age= prompt("digite sua idade")
// alert(`Você tem ${age}`)

//Escrever um programa que solicite ao usuário o nome, em seguida o programa solicita o sobrenome, apos isso o programa exibe no console a frase "O nome completo do usuário"

// let name=prompt ("digte seu nome")
// let surname=prompt ("digite seu sobrenome")

// console.log(`O nome do usuário é: ${name} ${surname}`)

console.error("error!!!")
console.warn("Aviso")

// Condicional
// let numero1 = prompt("digite um número:") 
// if(numero1 >= 18) {
//     alert(`pode entrar`)
// }
// else {
//     alert(`não pode entrar`)
// }
// se a condição for veradeira precisa aparecer o primeiro IF se a condição não for verdadeira  deve aparecer o segundo IF

// let username=prompt (`Qual o seu usuário`)

// if(username == "Nanda"){
//     console.log(`Estou com a Nanda em frente`)
// }
// if (username != "Nanda"){
//     console.log(`Usuário não cadastrado`)
// }

//Escreva um programa que solicite ao usuário que digite um numero qualquer, em seguida o programa deve solicita ao usuário digite outro numero, após isso o progrma irá apresentar a soma dos dois numeros. Se essa soma for >=100 apresentará na tela a msg "Parcelamos em até 10x sem juros" do contrário pagamento a vista

// let numero1 = parseInt(prompt("digite um valor"))
// let numero2 = parseInt(prompt ("digite um segundo valor"))



// if (numero1 + numero2 >= 100){
//     alert(`parcelamos em até 10x sem juros`)
// }
// else 
// {
//     alert(`pagamento a vista`)
// }

// uma professora gostaria de um programa que calculasse a média de duas provas. Primeiro o programa deve solicitar o nome do aluno em seguida solicitar nota 1 e nota 2 apos isso apresentar o resultado nome do aluno e a média final é ;

let namestudent= prompt("digite o nome do aluno")
let grade1= parseFloat(prompt("digita a primeira nota"))
let grade2= parseFloat(prompt("digita a segunda nota"))
const media= (grade1 + grade2) / 2

alert(`O ${namestudent} ficou com a média ${media} `)