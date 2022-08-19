import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../interface/character.interface';

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
  @Output() onNewCharacter: EventEmitter<Character>= new EventEmitter();

  add(): void {
    // event.preventDefault();
    if (this.element.name.trim().length === 0) { return;}
    this.onNewCharacter.emit(this.element);
    this.element = {
      name: '',
      power: 0
    }
  }
}
