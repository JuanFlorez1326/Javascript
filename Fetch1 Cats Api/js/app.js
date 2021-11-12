const URL = 'https://thatcopy.pw/catapi/rest/'
const title = document.querySelector('#title')
const image = document.querySelector('#image')
const button = document.getElementById('btnGenerate')

button.addEventListener('click', apiCats)
function apiCats() {  
  fetch(URL)
    .then(response => response.json())  
    .then(data => {    
    title.textContent = data.id
    image.setAttribute('src', data.url)
  })
  .catch(error => console.log(error))  
}