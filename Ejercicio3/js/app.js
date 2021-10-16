const letraInicial = document.querySelector("#letraInicial")
const nombreUsuario = document.querySelector("#nombreUsuario")
const txtParrafo = document.querySelector("#txtParrafo")
const btnEnviar = document.querySelector("#btnEnviar")
const mostrarParrafo = document.querySelector("#mostrarParrafo")
const contador = document.querySelector("#contador")


nombreUsuario.addEventListener('keyup', letra)
function letra() {
    let nombreLetra = nombreUsuario.value.charAt(0)
    letraInicial.textContent = nombreLetra.toUpperCase()
}

txtParrafo.addEventListener('keyup', contarLetras)
function contarLetras() {
    let cLetras = txtParrafo.value.length
    let cNumero = 200
    contador.textContent = cNumero - cLetras
    if (cLetras >= 150){       
        contador.style.setProperty("color", "red");
    }  
}


btnEnviar.addEventListener('click', mensaje)
function mensaje() {
    mostrarParrafo.textContent=`Texto: ${txtParrafo.value}`
}