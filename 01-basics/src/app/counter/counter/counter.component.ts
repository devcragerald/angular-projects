import { Component} from '@angular/core';


@Component({
    selector: 'app-counter',
    template: `
    <h1> {{ title }}</h1>
    <h3> La base es: <strong>{{base}}</strong></h3>

    <button (click)="accumulator(base)"> +{{base}} </button>
    <span>{{ number }}</span>
    <button (click)="accumulator(-base)"> -{{base}} </button>
    `
})
export class CounterComponent {
    title: string = '01-basics';
    number: number = 10;
    base: number = 5;
    // add() {
    //   this.number += 1;
    // }
  
    // substract() {
    //   this.number -= 1;
    // }
    
    accumulator(valor: number) {
      this.number += valor;
    }
  
}