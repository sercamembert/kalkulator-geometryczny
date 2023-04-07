import { Prostokat } from "./Prostokat.js";
export class Prostopadloscian extends Prostokat{
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