import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


/**
 * declaraciones: qué es lo que tiene este módulo
 * exports: qué cosa son visibles fuera del módulo
 * imports: módulos
 */
@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports: [
        ListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {}