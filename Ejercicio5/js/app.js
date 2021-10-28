const txtNombre = document.querySelector("#txtNombre")
const txtMensaje = document.querySelector("#txtMensaje")
const btnMostrar = document.querySelector("#btnMostrar")
const mostrarNombre = document.querySelector("#mostrarNombre")

const letras = [".","-","_","/","+","*"]

btnMostrar.addEventListener('click', validador)
function validador() {
    mostrarNombre.textContent=`${txtNombre.value}`
    if (txtNombre == letras) {
        
    }
}