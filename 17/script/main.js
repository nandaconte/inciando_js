const body = document.body

const slides = document.querySelectorAll('.slide')

const leftBtn = document.getElementById('left')

const rightBtn = document.getElementById('right')

let activeSlide = 0


rightBtn.addEventListener('click',() =>{
    activeSlide++
    if(activeSlide > slides.length -1) {
        activeSlide = 0
    }
    // cria um looping que quando chegar na ultima posição ele irá tirar 1 e voltar a posição 0
    setBgToBody()
    setactiveSlide()

})


leftBtn.addEventListener('click',()=>{
    activeSlide--
    if(activeSlide < 0){
        activeSlide.length -1
        // cria um looping que quando chegar na ultima posição ele irá acrescentar 1 e voltar a posição 3
    }
    setBgToBody()
    setactiveSlide()

})

setBgToBody()

// altera o background do site
function setBgToBody(){
    body.style.backgroundImage = slides
    [activeSlide].style.backgroundImage
}
// altera o slide que está ativo
function setactiveSlide(){
    // cria um looping em que ele irá fazer uma varredura na lista de slide para ver se tem algum ativo e remove essa ativação
    slides.forEach((slide)=> slide.classList.remove('active'))
    // ativa o slide 0
    slides[activeSlide].classList.add('active')
}