import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RollWristComponent } from './components/roll-wrist/roll-wrist.component';

const routes: Routes = [
  {
    path: '',
    component: RollWristComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
