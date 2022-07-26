import { Component } from '@angular/core';

interface Character {
  name: string,
  power: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {


  characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 14000
    }
  ]

  newCharacter: Character = {
    name: '',
    power: 0
  }

  changeName(event: any) {
    console.log(event.target.value);
  }

  add(): void {
    // event.preventDefault();
    if (this.newCharacter.name.trim().length === 0) { return;}
    this.characters.push(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0
    }
    console.log(this.newCharacter);
  }
}
