/*utilizando a esrutura switch case, solicite ao usuario e coloque no prompt a condição:

caso digite progrmador apresentar no console "voce é um progrmador"

caso digite advogado " vc é um advogado"

engenheiro = "vc é um engenheiro"

qualquer outra opção "profissão nao encontrada"*/
// let profissao = String(prompt(`Digite uma profissão: programador, advogado, engenheiro`))

// switch (profissao) {
//     case `advogado`:
//         console.log(`Você é um advogado`)
//         break;
//     case `engenheiro`:
//         alert(`Você é um engenheiro`)
//         break;
//     case `programador`:
//         alert(`Você é um programador`)
//         break;

//     default:
//         alert(`Profissão não encontrada`)
// }

// let contador = 1;

// while(contador <= 50){
//     console.log(contador)
//     contador++;

// }

// # ESTRUTURA DE REPETIÇÃO (WHILE)

// /* "While" --> Enquanto */

//  let contador = 1;

// while(contador <= 5){
//     console.log(contador);
//     contador++; // "++" incrementar +1
// }

// #ESTRUTURA DO...WHILE

// Do... While --> Faça... Enquanto

// let contador = 10;

// do{
//   console.log(contador);
//   contador--;
// }while (contador > 0 )

// // Escreva um programa em js que solicte um número ao usuário e exiba todos os número ímpares entre 1 e o número informado. Utilize um estrutura de repetição "laço for" para verificar se cada número entre 1 e o número informado é ímpar, e exiba os números ímpares no console

// let numero = parseInt(prompt("Digite um número:"))

// console.log("Numeros ímpares entre 1 e " + numero + ":")

// for(let i = 1; i<= numero; i++ ) {
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }