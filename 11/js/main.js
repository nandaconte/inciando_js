
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function(){
    console.log(`Clicou no botão!`)
});


const secondBtn = document.querySelector("#btn");

function imprimirMensagem(){
    console.log(`Teste`)
}


secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener('click', ()=>{
    console.log(`Evento Removido`);
    secondBtn.removeEventListener("click", imprimirMensagem);
});

const title = document.querySelector("#my-title");

title.addEventListener('click', (event)=>{ // podemos subistituir event apenas pela letra "e"
    console.log(event);
    console.log(event.target);
    console.log(event.offsetX);
    console.log(event.pointerType);
});

const containerBtn = document.querySelector("#btn-container");
const btnInsiderContainer = document.querySelector("#div-btn");


containerBtn.addEventListener('click', ()=>{
    console.log("Evento 1")
});
btnInsiderContainer.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log("Evento 2")
});

const a = document.querySelector('a');

a.addEventListener("click", (e) =>{
    e.preventDefault()
    console.log('Não alterou a pagina')
});

document.addEventListener("keyup", (e)  =>{
    console.log(`Soltou a tecla ${e.key}`)
})
document.addEventListener("keydown", (e)  =>{
    console.log(`Pressinou a tecla ${e.key}`)
});

const mouseEvent = document.querySelector('#mouse');

    mouseEvent.addEventListener('mousedown', () =>{
        console.log(`Pressinou o botão`)
    });

    mouseEvent.addEventListener('mouseup', () =>{
        console.log(`Soltou o botão`)
    });

    mouseEvent.addEventListener('dbclick', () =>{
        console.log(`Duplo Click`)
    });

    // mouseEvent.addEventListener('mousemove', (e) =>{
    //     console.log(`No eixo x: ${e.x}`);
    //     console.log(`No eixo y: ${e.y}`);
    // });

    window.addEventListener("scroll", (e) =>{
        if(window.scrollY > 200){
            console.log("passamos de 200px")
        }
    });
   
const input = document.querySelector("#my-input")

    input.addEventListener("focus", (e) => {
        console.log("Entrou no input")
    })

    input.addEventListener("blur", (e) => {
        console.log("Saiu no input")
    })