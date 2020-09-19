const cards = document.querySelectorAll(".card")
const botonBlanco = document.querySelector("#filtro-color-blanco")
const botonNegro = document.querySelector("#filtro-color-negro")


botonBlanco.onclick = () => {
    for (let card of cards){
        if (card.dataset.color === "blanco"){
           card.classList.remove(`hidden`)
        }
        else{
            card.classList.add(`hidden`)
        }
    }
}

botonNegro.onclick = () => {
    for (let card of cards){
        if (card.dataset.color === "negro"){
            card.classList.remove(`hidden`)
        }
        else{
            card.classList.add(`hidden`)
        }
    }
}
