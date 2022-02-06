'use strict'

const buttons = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');
const box = document.querySelector('.container__box');
const res = document.querySelector('.container__res');
const BMI = document.querySelector('.result');
const desc = document.querySelector('.description');

const calculateBmi = () => {
    const result = Math.round((inputs[3].value/(inputs[2].value/100)**2)*100)/100;

    BMI.innerHTML = result;

    if(result < 16) desc.innerHTML = 'Poważne wygłodzenie. Zagrożenie życia.';
    else if(result < 17) desc.innerHTML = 'Wychudzenie. Przytyj.';
    else if(result < 18.5) desc.innerHTML = 'Niedowaga. Brakuje Ci niewiele do prawidłowej masy ciała.';
    else if(result < 25) desc.innerHTML = 'Prawidłowa masa ciała. Tak trzymaj.';
    else if(result < 30) desc.innerHTML = 'Nadwaga. Trochę ćwiczeń i będzie ok.';
    else if(result < 35) desc.innerHTML = 'Otyłość I stopnia. Zacznij ćwiczyć.';
    else if(result < 40) desc.innerHTML = 'Otyłość II stopnia. Zacznij ćwiczyć i zmień dietę po jest nie dobrze.';
    else desc.innerHTML = 'Otyłość III stopnia. Ogarnij się człowieku bo za raz umrzesz.'
}

const clear = () => {
    inputs.forEach((element, idx) => {
        if(idx < 2) {
            element.checked = false;
        }
        else {
            element.value = '';
        }
    });
}

buttons[0].addEventListener('click', () => {
    if((inputs[0].checked || inputs[1].checked) && inputs[2].value.length>0 && inputs[3].value.length > 0){
        box.style = 'transform: opacity; opacity: 0; transition-duration: 1s; z-index: -1;';
        calculateBmi();
        res.style = 'transition-delay: .3s;transition-duration: 1s; transform opacity; opacity: 1; '
    }
})

buttons[1].addEventListener('click', clear);

buttons[2].addEventListener('click', () => {
    clear();
    res.style = 'transform: opacity; opacity: 0; transition-duration: 1s;';
    box.style = 'transition-delay: .3s;transition-duration: 1s; transform opacity; opacity: 1; z-index: 5;';
});