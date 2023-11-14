console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes[1]);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// TAG

const listaItens = document.getElementsByTagName("li");

console.log(listaItens);

//class

const products = document.getElementsByClassName("product")

console.log(products);

//id

const  title = document.getElementById("title");

console.log(title);

//via css
const  productsQuerry = document.querySelectorAll(".product");

console.log(productsQuerry);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title)