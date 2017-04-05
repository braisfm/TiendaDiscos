import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscosComponent } from './discos.component';
import {DiscosRoutingModule} from './discos-routing.module'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DiscosComponent], 
  exports: [DiscosComponent]
})
export class DiscosModule { }
