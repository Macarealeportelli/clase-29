const cards = document.querySelectorAll(".card")
const botonesFiltro = document.querySelectorAll(".filtro-boton")
const titulosTarjetas = document.querySelectorAll(".titulo")
const filtro = document.getElementById("filtro-nombre")

// for (let boton of botonesFiltro) {
//     boton.onclick = () => {
//         for (let card of cards) {
//             if (boton.dataset.color === card.dataset.color) {
//                 card.classList.remove(`hidden`)
//             }
//             else if (boton.dataset.color === "todos") {
//                 card.classList.remove(`hidden`)
//             }
//             else {
//                 card.classList.add(`hidden`)
//             }
//         }
//     }
// }

//armado de filtro por input

filtro.oninput = () =>{
    for (let card of cards){
        if(card.dataset.nombre.includes(filtro.value)){
            card.classList.remove(`hidden`)
        }
        else {
            card.classList.add(`hidden`)
        }
    }
}

