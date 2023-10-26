const lista = [1,2,3,4,5]

console.log(lista)
console.log(typeof lista)

const itens = ["aluno", true, 2, 4.75]

console.log(itens)

const arr = [`a`, `b`, `c`, `d`]

console.log(arr)
console.log(arr[0])
console.log(arr[3])
console.log(arr[10])

const numbers = [5,12,4,22]

console.log(numbers.length)
// -----------------
const myName = "Nanda"
console.log (myName.length)

const otherNumbers = [1,2,3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)
// -------------
const text ="algum texto"
console.log(text.toUpperCase())
console.log(typeof text.toUpperCase())
console.log(text.toLowerCase())
// 
console.log(text.indexOf("t"))
// ----

const person = {
    name:"Nanda",
    age:27,
    job: "analista"
}
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.job)

// 

const car = {
    engine:2.0,
    brand:"VW",
    model:"Tiguan",
    KM:2000,

}
console.log (car)

car.doors = 4
console.log(car)

delete car.KM
console.log(car)
// 

const obj = {
    a: `teste`,
    b: true,
}
console.log(obj instanceof Object)
// 
const obj2 ={
    c: [],
}
console.log(obj2)
console.log(obj2 instanceof Object)

Object.assign(obj2,obj)

console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(person))

// 
const users = ["Nanda", "Pedro", "Miguel", "Solange", "Paulo"]

console.log(users)

for(let i = 0; i < users.length; i++){
    console.log(`Listando usuários ${users[i]}`)

}

// Escreva um array com 10 numeros e em uma estrutura de repetição for percorra cada um dos elementos desse arry

const desafio = [1,2,3,4,5,6,7,8,9,10]


for (n = 0; n < desafio.length; n++){
    console.log(`O número é ${desafio[n]}`)
}
// 

const array = [`a`, `b`, `c`]
array.push(`d`)
console.log(array.length)

const intemRemovido = array.pop()
console.log(array.length)

array.push(`Dá`, `para`, `incluir`, `vários`)
console.log(array)

const letters = [`a`, `b`, `c`]
const letter = letters.shift()
// tirou o primeiro elemento da primeira constante e armazenou na segunda constante

console.log(letters)
console.log(letter)

letters.unshift(`z`, `x`,`y`)
letters.unshift(`p`)

console.log(letters)

const myElements = [`morango`, `maçã`, `abacate`, `pera`, `abacate`]

console.log(myElements.indexOf(`maçã`))
console.log(myElements.indexOf(`abacate`))
console.log(myElements[2])


console.log(myElements[myElements.indexOf(`acabate`)])

console.log(myElements.lastIndexOf(`abacate`))