// sisben = prompt("Sisben: ")
// estrato = prompt("Estrato: ")

// if (sisben < 3 && estrato < 2){
//     alert("Tiene derecho al subsidio.")
// }else{
//     alert("No tiene derecho al subsidio.")
// }

const sisben = document.getElementById("sisben")
const estrato = document.getElementById("estrato")
const mensaje = document.getElementById("mensaje")
const btnEnviar = document.getElementById("enviar")

const calcularSubsidio = () => {

    const Sisben = parseInt(sisben.value)
    const Estrato = parseInt(estrato.value)

    if( Sisben <= 3 && Estrato <= 2){
        mensaje.textContent = `Si tiene derecho al Subsidio.`
    }else{
        mensaje.textContent = `No tiene derecho al Subsidio.`
    }
}
btnEnviar.addEventListener("click", calcularSubsidio)
