// botão hamburguer
let btHam = document.querySelector(".hamburguer")

btHam.addEventListener("click", () =>{
    document.querySelector("header").classList.toggle("show")
})