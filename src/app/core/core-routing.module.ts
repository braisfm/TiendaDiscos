/** Módulos de enrutado de Angular2 */
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {DiscosComponent} from '../discos/discos.component';
import {VinilosComponent} from '../vinilos/vinilos.component';
import {EntradasComponent} from '../entradas/entradas.component';
import {MerchandisingComponent} from '../merchandising/merchandising.component';


// Array con las rutas de este módulo
const routes: Routes = [
  { path: '', component: HomeComponent, children : [
      { path: 'discos', component: DiscosComponent},
      { path: 'vinilos', component: VinilosComponent},
      { path: 'entradas', component: EntradasComponent},
      { path: 'merchandising', component: MerchandisingComponent},
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
