import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { DiscosModule} from '../discos/discos.module';
import { VinilosModule} from '../vinilos/vinilos.module';
import { EntradasModule} from '../entradas/entradas.module';
import { MerchandisingModule} from '../merchandising/merchandising.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    DiscosModule,
    VinilosModule,
    EntradasModule,
    MerchandisingModule
  ],
  declarations: [HomeComponent, NavigationComponent, DashboardComponent, HeaderComponent]
})
export class CoreModule { }
