import { Injectable } from "@angular/core";
import { Character } from "../interface/character.interface";

@Injectable()
export class DbzService {

    private _characters: Character[] = [
        {
            name: 'Goku',
            power: 15000
        },
        {
            name: 'Vegeta',
            power: 14000
        }
    ]

    get characters(): Character[] {
        return [...this._characters];
    }

    constructor() {
        console.log("serivicio ini")
    }
}