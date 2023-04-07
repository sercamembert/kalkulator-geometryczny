
class Prostokat{
    #A = 0;
    #B = 0;

    get BokA(){
        return this.#A
    }

    set BokA(value){
        this.#A = value;
    }
    get BokB(){
        return this.#B
    }

    set BokB(value){
        this.#B = value;
    }

    obliczPole(){
        return this.BokA * this.BokB;
    }
}

class Prostopadloscian extends Prostokat{
    #W = 0;
    get Wys(){
        return this.#W;
    }
    set Wys(value){
        return this.#W = value;
    }

    obliczPole(){
        return 2 * this.BokA * this.BokB + 2 * this.BokA * this.Wys + 2 * this.BokB * this.Wys;
    }
    obliczObjetosc(){
        return super.obliczPole() * this.Wys;
    }
}
class Ostrosłup extends Prostokat{

    #W = 0;
    get Wys(){
        return this.#W;
    }
    set Wys(value){
        return this.#W = value;
    }
    obliczPole(){
        return this.BokA*this.BokB+2*((this.BokA*(Math.sqrt((0.5*this.BokB)**2+this.Wys**2))/2))
        +2*((this.BokB*(Math.sqrt((0.5*this.BokA)**2 +this.Wys**2))/2))
    }
    obliczObjetosc(){
        return 0.33 * this.Wys * super.obliczPole()
    }
}



const radio = document.getElementsByName('checkRadio')
const objetosc  = document.getElementById('objetosc')
const wysokosc  = document.getElementById('wysokosc')
const pole  = document.getElementById('pole')
radio[0].addEventListener('change',()=>{
    objetosc.disabled = true;
    wysokosc.disabled = true;

})
radio[1].addEventListener('change',()=>{
    objetosc.disabled = false;
    wysokosc.disabled = false;
})
radio[2].addEventListener('change',()=>{
    objetosc.disabled = false;
    wysokosc.disabled = false;

})

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
    pole.value = prostokat.obliczPole()   
    }
    else if(radio[1].checked){
        pole.value = prostopadloscian.obliczPole();
        objetosc.value = prostopadloscian.obliczObjetosc();
    }
    else if(radio[2].checked){
        pole.value = ostrosłup.obliczPole();
        objetosc.value = ostrosłup.obliczObjetosc();
    }


})