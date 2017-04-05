/** Módulos de enrutado de Angular2 */
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {DiscosComponent} from '../discos/discos.component';

// Array con las rutas de este módulo
const routes: Routes = [
  { path: '', component: HomeComponent, children : [
      { path: 'discos', component: DiscosComponent}
  ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(routes) // configuración para un módulo raiz
  ],
  exports: [
    RouterModule // se importará desde el módulo padre, el raíz
  ]
})
export class CoreRoutingModule { }
