//const nombreUsuario= document.querySelector("#txtNombre")
const fechaNacimiento = document.querySelector("#fechaNacimiento")
//const boton= document.querySelector("#btnEnviar")
const mensaje= document.querySelector("#edad")

//boton.addEventListener('click', ValidarEdad) 

const calcularEdad =(fechaNacimiento)=>{
    const fechaActual = new Date()
    const annoActual = parseInt(fechaActual.getFullYear())
    const mesActual = parseInt(fechaActual.getMonth()) + 1
    const diaActual = parseInt(fechaActual.getDate())

    const annoNacimiento = parseInt(String(fechaNacimiento).substring(0,4))
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5,7))
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8,10))

    let edad = annoActual - annoNacimiento
    if(mesActual<mesNacimiento){
        edad--
    }else if (mesActual === mesNacimiento){
        if(diaActual < diaNacimiento){
            edad--
        }
    }
    return edad
}
window.addEventListener("load",function(){
    fechaNacimiento.addEventListener("change",function(){
        if (this.value){
            edad.innerText = `La edad es: ${calcularEdad(this.value)} años`
        }        
    })
})







/*function ValidarEdad (){

    const edad=parseInt(edadUsuario.value)
    if (edad >=18) {
        mensaje.textContent=` ${nombreUsuario.value} usted puede votar.`
        
    }
    else if (edad <18){
        mensaje.textContent=` ${nombreUsuario.value} usted no puede votar.`
    }
    if(edad <=0)
    mensaje.textContent= "Ingrese una edad valida."

*/
