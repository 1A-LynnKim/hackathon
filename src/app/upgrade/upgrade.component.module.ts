import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradeComponent } from './upgrade.component';
import { OfferComponentModule } from '../offer/offer.component.module';
import {FormsModule} from "@angular/forms";
import {TimerModule} from "../timer/timer.component.module";

@NgModule({
  declarations: [UpgradeComponent],
  imports: [CommonModule, OfferComponentModule, FormsModule, TimerModule],
  exports: [UpgradeComponent],
})
export class UpgradeModule {}
