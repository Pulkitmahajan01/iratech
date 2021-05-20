import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumbersComponent } from './numbers/numbers.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { PhoneComponent } from './phone/phone.component';
import { BlocksComponent } from './blocks/blocks.component';
import { BlockaComponent } from './blocks/blocka/blocka.component';
import { BlockbComponent } from './blocks/blockb/blockb.component';
import { BlockcComponent } from './blocks/blockc/blockc.component';
import { BlockdComponent } from './blocks/blockd/blockd.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersComponent,
    DynamicComponent,
    PhoneComponent,
    BlocksComponent,
    BlockaComponent,
    BlockbComponent,
    BlockcComponent,
    BlockdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
