import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '../shared/components/skeleton/skeleton.component';
import { HomeComponent } from './pages/home/home.page';
import { CwpFlowComponent } from '../cwp-flow/pages/cwp-flow/cwp-flow.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    children: [{ path: '', component: CwpFlowComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
