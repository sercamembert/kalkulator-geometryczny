import { Prostokat } from "./Prostokat.js";
export class Ostrosłup extends Prostokat {
  constructor(a, b, w) {
    super(a, b);
    this.W = w;
  }

  obliczPole() {
    return (
      this.A * this.B +
      2 * ((this.A * Math.sqrt((0.5 * this.B) ** 2 + this.W ** 2)) / 2) +
      2 * ((this.B * Math.sqrt((0.5 * this.A) ** 2 + this.W ** 2)) / 2)
    );
  }
  obliczObjetosc() {
    return 0.33 * this.W * super.obliczPole();
  }
}
