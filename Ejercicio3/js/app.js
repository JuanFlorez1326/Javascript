const letraInicial = document.querySelector("#letraInicial")
const nombreUsuario = document.querySelector("#nombreUsuario")
const txtParrafo = document.querySelector("#txtParrafo")
const btnEnviar = document.querySelector("#btnEnviar")
const mostrarParrafo = document.querySelector("#mostrarParrafo")


nombreUsuario.addEventListener('keyup', letra)
function letra() {
    let nombreLetra = nombreUsuario.value.charAt(0)
    letraInicial.textContent = nombreLetra.toUpperCase()
}


function contador() {
    
}


btnEnviar.addEventListener('click', mensaje)
function mensaje() {
    mostrarParrafo.textContent=`Texto: ${txtParrafo.value}`
}