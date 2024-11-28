import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {UpgradeModule} from "./upgrade/upgrade.component.module";
import {HeaderModule} from "./header/header.component.module";
import {TimerModule} from "./timer/timer.component.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UpgradeModule, HeaderModule, TimerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
