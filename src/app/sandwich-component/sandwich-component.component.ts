
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sandwich-component',
  templateUrl: './sandwich-component.component.html',
  styleUrls: ['./sandwich-component.component.css']
})
export class SandwichComponentComponent{
  
  comidaizq : string[] = ["Pan", "Carne", "Lechuga", "Pollo", "Tomate", "Queso"];
  selectizq : string[] | undefined;
  comidader : string[] = [];
  selectder : string[] | undefined;

  agregar() {
    if (this.selectizq) {
      this.selectizq.forEach((food) => {
        this.comidader.push(food);
        this.comidaizq = this.comidaizq.filter((item) => item !== food);
      });
      this.selectizq = undefined;
    }
  }
  
  eliminar() {
    if (this.selectder) {
      this.selectder.forEach((food) => {
        this.comidaizq.push(food);
        this.comidader = this.comidader.filter((item) => item !== food);
      });
      this.selectder = undefined;
    }
  }
}

