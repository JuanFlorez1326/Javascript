const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes'
const title = document.getElementById('title')
const image = document.getElementById('image')
const message = document.getElementById('message') 
const btnGenerate = document.getElementById('btnGenerate')

btnGenerate.addEventListener('click', simpsons)
function simpsons() {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        title.textContent = data[0].character
        image.setAttribute('src', data[0].image)
        message.textContent = data[0].quote    
    })
    .catch(error => console.log(error))
}