import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../interface/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {
  @Input() element: Character = {
    name: "",
    power: 0
  }
  // @Output() onNewCharacter: EventEmitter<Character>= new EventEmitter();

  constructor(private dbzService: DbzService) {}

  add(): void {
    // event.preventDefault();
    if (this.element.name.trim().length === 0) { return;}
    // this.onNewCharacter.emit(this.element);
    this.dbzService.addCharacter(this.element);
    this.element = {
      name: '',
      power: 0
    }
  }
}
