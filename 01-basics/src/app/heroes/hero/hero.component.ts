import { Component } from "@angular/core";

@Component({
    selector:'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent {

    name: string = 'Hulk';
    age: number = 36;

    /** Getter se ve como si fuese una propiedad */
    get capitalName(): string {
        return this.name.toUpperCase();
    }

    getName(): string {
        return `${this.name} - ${this.age}`;
    }

    changeName(): void {
        this.name = "Thor";
    }

    changeAge(): void {
        this.age = 50;
    }
}