const cards = document.querySelectorAll(".card")
const botonesFiltro = document.querySelectorAll(".filtro-boton")

for (let boton of botonesFiltro) {
    boton.onclick = () =>{
       for (let card of cards){
           if (boton.dataset.color === card.dataset.color){
               card.classList.remove (`hidden`)
           }
           else {
               card.classList.add (`hidden`)
           }
       }
    }
}