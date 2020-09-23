const cards = document.querySelectorAll(".card")
const filtroColor = document.querySelectorAll(".filtro-check")
const titulosTarjetas = document.querySelectorAll(".titulo")
const filtro = document.getElementById("filtro-nombre")
const filtroSexo = document.querySelectorAll("input[type='radio']")

//armado de filtro por input

filtro.oninput = () => {
    for (let card of cards) {
        if (card.dataset.nombre.includes(filtro.value.toLowerCase())) {
            card.classList.remove(`hidden`)
        }
        else {
            card.classList.add(`hidden`)
        }
    }
}



//armado de filtro por botones

for (let checkbox of filtroColor){
    checkbox.oninput = () => {
        for(let card of cards){
            card.classList.add('hidden')
            for(let filtro2 of filtroColor){
                if (filtro2.checked){
                    if (filtro2.value === card.dataset.color){
                        card.classList.remove('hidden')
                    }
                    else if (filtro2.value === "todos"){
                        card.classList.remove('hidden')
                    }
                }
            }
        }
    }
}



//armado de filtro por checkbox o radio

for (let radio of filtroSexo) {
    radio.oninput = () => {
        for (let card of cards) {
            if (radio.value === "i") {
                card.classList.remove(`hidden`)
            }
            else if (radio.checked) {
                if (card.dataset.sexo === radio.value) {
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
