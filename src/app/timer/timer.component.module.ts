import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';

@NgModule({
  declarations: [TimerComponent],
  imports: [CommonModule],
  exports: [TimerComponent] // Export TimerComponent for use in other modules
})
export class TimerModule {}
