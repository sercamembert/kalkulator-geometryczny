import {Prostokat} from './Prostokat.js';
import {Prostopadloscian} from './Prostopadloscian.js';
import {Ostrosłup} from './Ostrosłup.js';

const radio = document.getElementsByName('checkRadio')
const objetosc  = document.getElementById('objetosc')
const wysokosc  = document.getElementById('wysokosc')
const wysokoscText  = document.getElementById('wysokoscText')
const pole  = document.getElementById('pole')

//Prostokąt
radio[0].addEventListener('change',()=>{
    classAdd(wysokosc,'none')
    classAdd(wysokoscText,'none')
})
//Prostopadłościan
radio[1].addEventListener('change',()=>{
    classRemove(wysokosc,'none')
    classRemove(wysokoscText,'none')
})
//Ostrosłup
radio[2].addEventListener('change',()=>{
    classRemove(wysokosc,'none')
    classRemove(wysokoscText,'none')
})


function classRemove (object,className) {
    return object.classList.remove(`${className}`)
}

function classAdd (object,className) {
    return object.classList.add(`${className}`)
}

const btn = document.getElementById('oblicz')
btn.addEventListener('click',()=>{
    const bokA = document.getElementById('side1')
    const bokB = document.getElementById('side2')

    const prostokat = new Prostokat()
    prostokat.BokA = parseFloat(bokA.value) 
    prostokat.BokB = parseFloat(bokB.value) 

    const prostopadloscian = new Prostopadloscian()
    prostopadloscian.Wys =  parseFloat(wysokosc.value)
    prostopadloscian.BokA = parseFloat(bokA.value) 
    prostopadloscian.BokB = parseFloat(bokB.value) 

    const ostrosłup = new Ostrosłup()
    ostrosłup.Wys =  parseFloat(wysokosc.value)
    ostrosłup.BokA = parseFloat(bokA.value) 
    ostrosłup.BokB = parseFloat(bokB.value) 

    
    if(radio[0].checked){
    classRemove(pole,'none');
    if(isNaN(prostokat.obliczPole())) pole.innerHTML = `Uzupełnij wszystkie pola`;
    else pole.innerHTML = `Pole: ${prostokat.obliczPole()}`;
    }
    else if(radio[1].checked){
        classRemove(pole,'none');
        classRemove(objetosc,'none');
        if(isNaN(prostopadloscian.obliczPole()) || isNaN(prostopadloscian.obliczObjetosc())) {
            pole.innerHTML = `Uzupełnij wszystkie pola`;
            objetosc.innerHTML = ``;
        }
        else{
        pole.innerHTML = `Pole: ${prostopadloscian.obliczPole()}`
        objetosc.innerHTML = `Objętość: ${prostopadloscian.obliczObjetosc()}`            
        }

    }
    else if(radio[2].checked){
        classRemove(pole,'none');
        classRemove(objetosc,'none');
        if(isNaN(ostrosłup.obliczPole()) || isNaN(ostrosłup.obliczObjetosc())) {
            pole.innerHTML = `Uzupełnij wszystkie pola`;
            objetosc.innerHTML = ``;
        }
        else{
        pole.innerHTML = `Pole: ${ostrosłup.obliczPole()}`
        objetosc.innerHTML = `Objętość: ${ostrosłup.obliczObjetosc()}`            
        }
    }


})