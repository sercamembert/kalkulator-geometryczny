export class Prostokat{
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