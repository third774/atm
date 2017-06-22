import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import {ButtonService} from '../../services/button.service';
import {Subscription} from 'rxjs/Subscription';
import {Button} from '../../models/button.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {

  weather$: Observable<string>;
  readonly url = 'http://api.openweathermap.org/';
  readonly location = 'Austin,TX';
  readonly apiKey = '50cfb1fefe90e7ced682fb1a2407ba1b';

  buttonSubscription: Subscription;


  constructor(private http: Http, private buttonService: ButtonService, private router: Router) { }

  ngOnInit() {
    this.buttonSubscription = this.buttonService.Button$.subscribe(button => this.handleButtonPress(button));
    this.weather$ = this.http.get(`${this.url}data/2.5/weather?q=${this.location}&units=imperial&appid=${this.apiKey}`)
      .map(res => res.json());
  }

  ngOnDestroy() {
    this.buttonSubscription.unsubscribe();
  }

  handleButtonPress(button: Button) {
    switch (button) {
      case Button.Left4:
        this.goBack();
    }
  }

  goBack() {
    this.router.navigate(['/main-menu']);
  }


}
