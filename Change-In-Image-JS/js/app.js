const main = document.getElementById('main');

const count = document.createElement('p');
count.textContent = '0';
count.classList.add('textClass');

const img = document.createElement('img');
img.src = 'images/mugiwaras.jpg';
img.classList.add('imgClass');



const sum = document.createElement('button');
sum.textContent = '+';
sum.classList.add('btnSum');

const numberSum = () => {
    let countSum = 1;
    const sumN = (parseInt(count.textContent) + countSum);
    count.textContent = sumN;
    if (count.textContent > 0){
        img.style.opacity = '0.5';
    };
};
sum.addEventListener('click',numberSum);



const reset = document.createElement('button');
reset.textContent = 'Restore';
reset.classList.add('btnRestore');

const resetImage = () =>{
    let countReset = 0;
    count.textContent = (countReset);
    img.style.opacity = '1';
};
reset.addEventListener('click',resetImage);



const subtract = document.createElement('button');
subtract.textContent = '-';
subtract.classList.add('btnSubtract');

const numberSubtract = () => {
    let countSubtract = 1;
    const SubtractN = (parseInt(count.textContent) - countSubtract);
    count.textContent = SubtractN;
    if (count.textContent < 0){
        img.style.opacity = '0.2';
    };
};
subtract.addEventListener('click',numberSubtract);



main.appendChild(count);
main.appendChild(img);
main.appendChild(sum);
main.appendChild(reset);
main.appendChild(subtract);