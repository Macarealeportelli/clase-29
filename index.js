const cards = document.querySelectorAll(".card")
const botonesFiltro = document.querySelectorAll(".filtro-boton")
const titulosTarjetas = document.querySelectorAll(".titulo")
const filtro = document.getElementById("filtro-nombre")
const filtroSexo = document.querySelectorAll("input[type='radio']")


//armado de filtro por botones

for (let boton of botonesFiltro) {
    boton.onclick = () => {
        for (let card of cards) {
            if (boton.dataset.color === card.dataset.color) {
                card.classList.remove(`hidden`)
            }
            else if (boton.dataset.color === "todos") {
                card.classList.remove(`hidden`)
            }
            else {
                card.classList.add(`hidden`)
            }
        }
    }
}

//armado de filtro por input

filtro.oninput = () =>{
    for (let card of cards){
        if(card.dataset.nombre.includes(filtro.value.toLowerCase())){
            card.classList.remove(`hidden`)
        }
        else {
            card.classList.add(`hidden`)
        }
    }
}


//armado de filtro por checkbox o radio

for (let radio of filtroSexo){
  radio.oninput = () => {
      for (let card of cards) {
          if (radio.value === "i"){
              card.classList.remove (`hidden`)
          }
          else if (radio.checked) {
              if (card.dataset.sexo === radio.value){
                  card.classList.remove(`hidden`)
              }
              else {
                  card.classList.add(`hidden`)
              }
          }
          else {
              card.classList.remove(`hidden`)
          }
      }
  }
}

