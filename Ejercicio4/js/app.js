const boton = document.querySelector("#boton")

boton.addEventListener("click",generarColor)
function generarColor() {

    let color1 = Math.floor( Math.random()*255)
    let color2 = Math.floor( Math.random()*255)
    let color3 = Math.floor(Math.random()*255)

    let colores = `rgb(${color1},${color2},${color3})`
    console.log(colores)

    document.body.style.background = colores

}