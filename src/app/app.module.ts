import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './chon-ve-xe-bus/home-component/home-component.component';
import { ListChairComponentComponent } from './chon-ve-xe-bus/list-chair-component/list-chair-component.component';
import { BookedChairComponentComponent } from './chon-ve-xe-bus/booked-chair-component/booked-chair-component.component';
import { ChonVeXeBusComponent } from './chon-ve-xe-bus/chon-ve-xe-bus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ListChairComponentComponent,
    BookedChairComponentComponent,
    ChonVeXeBusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
