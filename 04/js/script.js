// let nota1 = parseFloat(prompt(`nota 1`))
// let nota2 = parseFloat(prompt(`nota 2`))
// let nota3 = parseFloat(prompt(`nota 3`))

// let media = (nota1 + nota2 + nota3) / 3

// if (media < 5){
//     alert(`Aluno(a) reprovado(a) com média ${media}`)
// }

// else if (media >= 5  && media < 7){
//     alert(`Aluno (a) em recuperação com média ${media}`)
// }
// else{
//     alert(`Aluno(a) aprovado(a) com média ${media}`)
// }

// let numero = parseInt(prompt (`Dgitie um número de 1 até 12`))

// if (numero === 1){
//     alert(`O mês foi: janeiro`)
// }
// else if (numero === 2){
//     alert(`O mês digitado foi: feveriro`)
// }
// else if (numero === 3){
//     alert(`O mês digitado foi: março`)
// }
// else if (numero === 4){
//     alert(`O mês digitado foi: abril`)
// }
// else if (numero === 5){
//     alert(`O mês digitado foi: maio`)
// }
// else if (numero === 6){
//     alert(`O mês digitado foi: junho`)
// }
// else if (numero === 7){
//     alert(`O mês digitado foi: julho`)
// }
// else if (numero === 8){
//     alert(`O mês digitado foi: agosto`)
// }
// else if (numero === 9){
//     alert(`O mês digitado foi: setembro`)
// }
// else if (numero === 10){
//     alert(`O mês digitado foi: outubro`)
// }
// else if (numero === 11){
//     alert(`O mês digitado foi: novembro`)
// }
// else if (numero === 12){
//     alert(`O mês digitado foi: dezembro`)
// }
// else{
//     alert(`Número invalido`)
// }

let numero = parseInt(prompt(`Digite um número de 1 até 12`))

switch(numero){
    case 1:
        alert(`janeiro`)
        break;
    case 2:
        alert(`fev`)
        break;
    case 3:
        alert(`mar`)
        break;
    case 4:
        alert(`abr`)
        break;
    case 5:
        alert(`mai`)
        break;
    case 6:
        alert(`jun`)
        break;
    case 7:
        alert(`jul`)
        break;
    case 8:
        alert(`ago`)
        break;
    case 9:
        alert(`set`)
        break;
    case 10:
        alert(`out`)
        break;
    case 11:
        alert(`nov`)
        break;
    case 12:
        alert(`dez`)
        break;
    default:
        alert(`mês invalido`)
        
  
}