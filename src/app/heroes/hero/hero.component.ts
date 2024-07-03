import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes-hero',
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css'
})
export class HeroComponent {

    public name: string = 'Ironman';
    public age: number = 21;
    public metodo: string = 'No se ha seleccionado ningún método';

    changeName(): void {
        this.name = 'Hulk';
        this.metodo = 'Método Seleccionado = changeName()';
    }

    changeAge(): void {
        this.age = 30;
        this.metodo = 'Método Seleccionado = changeAge()';
    }

    get capitalizedName(): string {
        return this.name.toUpperCase();
    }

    getHeroDescription(): string {
        return `${this.name} - ${this.age}`;
    }

    resetForm(): void {
        this.name = 'Ironman';
        this.age = 21;
    }
}
