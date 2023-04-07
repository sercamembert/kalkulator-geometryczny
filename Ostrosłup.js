import { Prostokat } from "./Prostokat.js";
export class Ostrosłup extends Prostokat{

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