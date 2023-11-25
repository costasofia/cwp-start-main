import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.page';
import { SharedModule } from '../shared/shared.module';
import { CwpFlowModule } from '../cwp-flow/cwp-flow.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, CwpFlowModule, SharedModule],
})
export class HomeModule {}
