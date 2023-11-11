// const animal  ={
//     nome:"Bob",

//     latir: function(){
//         console.log (`Au au`)
//     }
// }

// console.log(animal);

// animal.latir();

// const pessoa ={
//     nome:`Nanda`,
    
//     getNome:function(){
//         return this.nome;
//     },
//     setNome: function (novoNome){
//         this.nome = novoNome
//     }
// }

// console.log(pessoa.nome);
// console.log(pessoa.getNome())
// pessoa.setNome(`Student Nanda`)
// console.log(pessoa.getNome())

// const text = "asd"
// console.log(Object.getPrototypeOf(text));

// const bool = true;
// console.log(Object.getPrototypeOf(bool));

// const arr = [ ]
// console.log(arr.lenght)
// console.log(Object.getPrototypeOf(arr)=== Array.prototype);


// definição do objeto
// const cachorro = {
//     raca: null,
// };
// criação do objeto
// const pastorAlemao = Object.create(cachorro);

// pastorAlemao.raca = `Pastor Alemão`;

// console.log(cachorro);
// console.log(pastorAlemao);
// console.log(pastorAlemao.raca);

// const bulldog = Object.create(cachorro);
// bulldog.raca = `Bulldog`;
// console.log(cachorro);
// console.log(bulldog);
// console.log(bulldog.raca);


// function criarCachorro(nome,raca){
//     const cachorro = Object.create({});
//     cachorro.raca = raca;
//     cachorro.nome = nome;
//     return cachorro;
// }

// const brisa = criarCachorro(`Brisa`, `Caramelo`);

// console.log(brisa);

// const portus = criarCachorro(`Portus`, `Doberman`);
// console.log(Object.getPrototypeOf(portus));


// function Cachorro(nome,raca){
//     this.nome = nome;
//     this.raca = raca;
// }

// const husky = new Cachorro(`Ozzy`, `Husky`);
// Cachorro.prototype.uivar = function(){
//     console.log(`Auuuuuuuuuuuuuuuu`);
// };

// console.log(husky);
// husky.uivar();

// class CachorroClasse{
//     constructor(nome, raca){
//         this.nome = nome;
//         this.raca = raca;
//     }
// }

// const jeff = new CachorroClasse (`Jeff`, `Labrador`)

// console.log(jeff);
// console.log(Object.getPrototypeOf(jeff));


// class Caminhao{
//     constructor(eixos,cor){
//         this.eixos = eixos;
//         this.cor = cor;
//     }
//     descreverCaminhao(){
//         console.log(
//             `Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`
//         )
//     }
// }
// const scania = new Caminhao (6, `Vermelha`)

// console.log(scania)

// scania.descreverCaminhao();

// Caminhao.motor = 4.0;
// const c2 = new Caminhao (4, `Preta`)

// console.log(c2.motor);

// Caminhao.prototype.motor = 4.0;
// const c3 = new Caminhao (6, `Azul`);

// console.log(c3.motor);
// console.log(c3)


// class Humano{
//     constructor (nome,idade){
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const nandinha = new Humano (`Nandinha`, 27);
// console.log (nandinha)

// Humano.prototype.idade = `Não definida`;

// console.log(nandinha.idade)
// console.log(Humano.prototype.idade)


// class Aviao{
//     constructor(marca,turbinas){
//         this.marca = marca;
//         this.turbinas = turbinas;
//     }
// }

// const asas = Symbol();
// Aviao.prototype[asas] = 2;

// const boeing = new Aviao(`Boeing`, 10);

// console.log(boeing);
// console.log(boeing[asas]);
// console.log(Aviao.prototype[asas]);

// class Post{
//     constructor(titulo,descricao,tags){
//         this.titulo = titulo;
//         this.descricao = descricao;
//         this.tags = tags;
//     }
//     get exibirTitulo(){
//         return `Você está lendo: ${this.titulo}`;
//     }
//     set adicionarTags (tags){
//         const tagsArray = tags.split(", ");
//         this.tags = tagsArray;
//     }
// }

// const myPost = new Post(`Algum post`, `é um post sobre programação`);

// console.log(myPost.exibirTitulo);

// myPost.adicionarTags = `Programação, Javascript, Js, Hell`;

// console.log(myPost)

class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

class Lobo extends Mamifero{
    constructor(patas,nome){
        super(patas, patas);
        this.nome = nome;
    }
}

const shark = new Lobo(4, `Shark`)

console.log(shark)
// herdando as caracteristicas de...
console.log(shark instanceof Lobo)
console.log(Lobo instanceof Mamifero)
console.log(Mamifero instanceof Lobo)