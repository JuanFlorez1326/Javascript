const numero = document.getElementById('nMagico')
const mensaje = document.getElementById('mensaje')

const nAleatorio = Math.round(Math.random()*20)


numero.addEventListener('keyup',validacion)
console.log(nAleatorio)

function validacion(event) {
    
    if(event.keyCode == 13){

        if(numero.value == nAleatorio){
            mensaje.textContent = 'Encontro el numero magico'
        }

        else if (numero.value < nAleatorio){
            mensaje.textContent = `El numero  magico es mayor a ${numero.value}`
        }

        else{
            mensaje.textContent = `El numero magico es menor a ${numero.value}`
        }
    }
}



// numero.addEventListener('keyup',aleatorio)
// function aleatorio(min, max) {

//     let nAleatorio = Math.floor(Math.random() * (5 - 1))
//     console.log(nAleatorio)

//     if(nAleatorio == (numero.value))
//     {
//         mensaje.textContent = `El numero magico es: ${numero.value}`
//     } 
//     else{
//         mensaje.textContent = `Este numero no es magico`
//     }
//   }