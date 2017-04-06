import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradasComponent } from './entradas.component';
import {EntradasRoutingModule} from './entradas-routing.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EntradasComponent]
})
export class EntradasModule { }
