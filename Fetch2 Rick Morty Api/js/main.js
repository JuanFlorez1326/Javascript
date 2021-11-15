const URL = 'https://rickandmortyapi.com/api/character/'
const elegirCarta = document.getElementById('elegirCarta')
const todasCartas = document.getElementById('todasCartas')
const main = document.getElementById('main')

//Traer nombres a la etiqueta Select
function rickyMorty() {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        data.results.map(element => {
            const opcion = document.createElement('option')
            opcion.textContent = element.name
            elegirCarta.appendChild(opcion)
        });
    })
    .catch(error => console.log(error))
}
rickyMorty()

//Creacion de las cartas
function crearCartas(data) {

    //Creacion Elementos en el HTML
    const divCarta = document.createElement('div')
    const tituloCarta = document.createElement('h1')
    const imagenCarta = document.createElement('img')
   
    //Añadir clases a las etiquetas
    divCarta.classList.add('divCarta');
    tituloCarta.classList.add('tituloCarta')
    imagenCarta.classList.add('imagenCarta')
    
    //Añadiendo info de api a las etiquetas HTML
    tituloCarta.textContent = data.name
    imagenCarta.src = data.image

    //Agregar todo al main
    divCarta.appendChild(tituloCarta)
    divCarta.appendChild(imagenCarta)
    main.appendChild(divCarta); 
}

//Seleccionar Cartas
elegirCarta.addEventListener('change', compararElemento)
function compararElemento() {
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        // const op es opcion 
        const op = elegirCarta.value
        if( op === todasCartas.value) {
            //Retorno de todas las Cartas.
            main.innerHTML = ""
            return data.results.map(element => {
                crearCartas(element)
            })
        }
        else {
            // Retorno de 1 sola Carta.
            return data.results.map(element => {
                if (element.name === op) {
                    main.innerHTML = ""
                    crearCartas(element)
                }
            })
        }        
    })
    .catch(error => console.log(error))
}