import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OfferComponent],
  imports: [CommonModule, FormsModule],
  exports: [OfferComponent],
})
export class OfferComponentModule {}
