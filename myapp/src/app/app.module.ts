import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { EasepickComponent } from './easepick/easepick.component';
import { ReservationTableComponent } from './reservation-table/reservation-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EasepickComponent,
    ReservationTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
