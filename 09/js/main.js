// console.log('Ainda não executou!');

// setTimeout( function() {
//     console.log('Requisção assincrona!')
    
// }, 2000);

// console.log('Ainda não executou 2');

// console.log('Ainda não!');

// setInterval( function() {
//     console.log('Requisção assincrona!')
    
// }, 3000);

// console.log('Ainda não 2');

// const promessa = Promise.resolve(5+10);

// console.log('Código...blá blá blá');

// promessa
//     .then((value) =>{
//     console.log(`A soma é ${value}`);
//         return value;
//     })

//     .then((value) => value + 3)
//     .then((value) => console.log(`Agora o valor é: ${value}`));

// Promise.resolve(4 * "adg")
// .then((n) =>{
//     if(Number.isNaN(n)){
//         throw new Error(`Valores inválidos`)
//         //trava com um novo construtor que irá ler a mesangem em string e uma função no catch apontando esse erro
//     }
// })
// .catch ((err) => console.log(`Ocorreu um erro: ${err}`))

function checkNumber(n){
    return new Promise((resolve, reject) =>{
        if (n > 10){
            resolve (`O número é maior que 10!`)
        }
        else{
            reject(new Error(`Número abaixo do esperado`))
        }
    });
}

const a = checkNumber(20);
const b = checkNumber (5);

a.then((v)=> console.log(`O resultado é : ${v}`)).catch((err)=>
console.log(`Um erro ocorre ${err}`)
)
4
b.then((v)=> console.log(`O resultado é : ${v}`)).catch((err)=>
console.log(`Um erro ocorre ${err}`)
)