import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  
  heroes: string[] = ['spiderman', 'hulk', 'antman', 'thor']
  deadHero: string = '';

  deleteHero(): void {
    this.deadHero = this.heroes.pop() || '';
  }
}
