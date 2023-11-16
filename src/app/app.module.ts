import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MapComponent } from './components/map/map.component';

import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import { MatListModule} from '@angular/material/list';
import { MapCardComponent } from './components/map-card/map-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
