const textInput = document.getElementById('textInput')
const btnCapitalLetter = document.getElementById('capitalLetter')
const btnLowerCase = document.getElementById('lowerCase')
const btnInitialCapital = document.getElementById('initialCapital')
const btnClearUp = document.getElementById('clearUp')


const CapitalLetter = () => {
    textInput.value=textInput.value.toUpperCase()
}
btnCapitalLetter.addEventListener('click', CapitalLetter)


const LowerCase = () => {
    textInput.value=textInput.value.toLowerCase()
}
btnLowerCase.addEventListener('click', LowerCase)


const InitialCapital = () => {
    let txt = ''
    let array = textInput.value.trimEnd().split(' ')
    array.forEach(element => {
        const mayusInicial = element[0].toUpperCase() + element.slice(1).toLowerCase()
        txt = txt + mayusInicial + ' '
    })
    textInput.value = txt
}
btnInitialCapital.addEventListener('click', InitialCapital)


const ClearUp = () => {
    textInput.value= ''
}
btnClearUp.addEventListener('click', ClearUp)