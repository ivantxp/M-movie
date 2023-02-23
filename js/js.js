let personaje = document.getElementById("personaje")

personaje.onclick = salto
personaje.onanimationend = salto
function salto(){
    personaje.classList.toggle("salto")
    personaje.classList.toggle("corriendo")
}





//buscar posivio en las porpiedades de personage


