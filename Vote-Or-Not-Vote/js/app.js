const nombreUsuario= document.querySelector("#txtNombre")
const edadUsuario= document.querySelector("#txtEdad")
const boton= document.querySelector("#btnEnviar")
const mensaje= document.querySelector("#txtMensaje")

boton.addEventListener('click', ValidarEdad) 

function ValidarEdad (){
    const Edad=parseInt(edadUsuario.value)
    if (Edad >=18) {
        mensaje.textContent=` ${nombreUsuario.value} usted puede votar.`
        
    }
    else if (Edad <18){
        mensaje.textContent=` ${nombreUsuario.value} usted no puede votar.`
    }
    if(Edad <=0)
    mensaje.textContent= "Ingrese una edad valida."

}