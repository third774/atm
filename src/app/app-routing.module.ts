import {RouterModule, Routes} from '@angular/router';
import {PinComponent} from './components/pin/pin.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {WeatherComponent} from './components/weather/weather.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/pin',
    pathMatch: 'full'
  },
  {
    path: 'pin',
    component: PinComponent
  },
  {
    path: 'main-menu',
    component: MainMenuComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES);
