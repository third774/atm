import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtmComponent } from './components/atm/atm.component';
import { ScreenComponent } from './components/screen/screen.component';
import { AtmSignComponent } from './components/atm-sign/atm-sign.component';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { PinComponent } from './components/pin/pin.component';
import {AppRoutingModule} from './app-routing.module';
import { ButtonLabelsComponent } from './components/button-labels/button-labels.component';
import {ButtonService} from './services/button.service';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import {CreditCardService} from './services/credit-card.service';
import {FormsModule} from '@angular/forms';
import { WeatherComponent } from './components/weather/weather.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    ScreenComponent,
    AtmSignComponent,
    CreditCardsComponent,
    PinComponent,
    ButtonLabelsComponent,
    MainMenuComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    ButtonService,
    CreditCardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
