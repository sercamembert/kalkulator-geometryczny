import { Prostokat } from "./Prostokat.js";
export class Prostopadloscian extends Prostokat {
  constructor(a, b, w) {
    super(a, b);
    this.W = w;
  }
  #W = 0;

  obliczPole() {
    return 2 * this.A * this.B + 2 * this.A * this.W + 2 * this.B * this.W;
  }
  obliczObjetosc() {
    return super.obliczPole() * this.W;
  }
}
