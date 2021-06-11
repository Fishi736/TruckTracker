import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { NavsComponent } from './navs/navs.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
// import {} from 'googlemaps';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB7zfIAhGJ8NUTa4cs9vEilxKFSDzej3Dw'
    })
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
