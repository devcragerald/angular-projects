import { Component } from '@angular/core';
import { Character } from '../interface/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  // newCharacter: Character = {
  //   name: '',
  //   power: 0
  // }

  // add(): void {
  //   // event.preventDefault();
  //   if (this.newCharacter.name.trim().length === 0) { return;}
  //   this.characters.push(this.newCharacter);
  //   this.newCharacter = {
  //     name: '',
  //     power: 0
  //   }
  //   console.log(this.newCharacter);
  // }

  // characters: Character[] = [];

  // addCharacter(event: Character) {
  //   this.characters.push(event);
  // }

  constructor(private dbzService: DbzService) {
    // this.characters = this.dbzService.characters;
  }
}
