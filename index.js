const cards = document.querySelectorAll(".card")
const botonBlanco = document.querySelector("#filtro-color-blanco")



botonBlanco.onclick = () => {
    for (let card of cards){
        if (card.dataset.color === "blanco"){
            console.log("el color es blanco")
        }
        else{
            card.classList.add(`hidden`)
        }
    }
}

