/** Módulos de enrutado de Angular2 */
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

// Array con las rutas de este módulo
const routes: Routes = [
  { path: '', loadChildren: './core/core.module#CoreModule' },
  { path: 'login', loadChildren: './security/security.module#SecurityModule' },
  { path: 'login', loadChildren: './security/security.module#SecurityModule' },
  { path: 'discos', loadChildren: './discos/discos.module#DiscosModule' },
  { path: 'entradas', loadChildren: './entradas/entradas.module#EntradasModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // configuración para un módulo raiz
  ],
  exports: [
    RouterModule // se importará desde el módulo padre, el raíz
  ]
})
export class AppRoutingModule { }
