import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { RollWristComponent } from './components/roll-wrist/roll-wrist.component';

@NgModule({
  declarations: [RollWristComponent],
  imports: [CommonModule, LayoutRoutingModule],
  exports: [RollWristComponent],
  providers: [],
})
export class LayoutModule {}
