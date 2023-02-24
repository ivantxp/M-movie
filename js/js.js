let personaje = document.getElementById("personaje")

personaje.onclick = salto
personaje.onanimationend = salto
function salto(){
    personaje.classList.toggle("salto")
    personaje.classList.toggle("corriendo")
}

let marciano = document.getElementById("marciano")

function MarcianoMover(){
    let b = 0
    for( i = 0; i < 5000; i = i + 100){
       
        b = b + 1 
        setTimeout(() => {
            marciano.style.right =   b + "px"
        }, i);  
        console.log(b)
        console.log(i)


    }
}

MarcianoMover()

//buscar posivio en las porpiedades de personage


