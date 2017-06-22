import {Component, OnDestroy, OnInit} from '@angular/core';
import {Button} from '../../models/button.enum';
import {Router} from '@angular/router';
import {ButtonService} from '../../services/button.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit, OnDestroy {

  buttonSubscription: Subscription;

  constructor(private buttonService: ButtonService, private router: Router) {
  }

  ngOnInit() {
    this.buttonSubscription = this.buttonService.Button$.subscribe(button => this.handleButtonPress(button));
  }

  ngOnDestroy() {
    this.buttonSubscription.unsubscribe();
  }

  handleButtonPress(button: Button) {
    switch (button) {
      case Button.Right2:
        this.Weather();
        break;
      case Button.Right3:
        this.Balance();
        break;
      case Button.Right4:
        this.ReEnterPin();
        break;
      case Button.Left3:
        this.Withdraw();
        break;
      case Button.Left4:
        this.Deposit();
        break;
    }
  }

  Withdraw() {
    alert('Withdraw Clicked');
  }

  Deposit() {
    alert('Deposit Clicked');
  }

  Balance() {
    alert('Balance Clicked');
  }

  ReEnterPin() {
    this.router.navigate(['/pin']);
  }

  Weather() {
    this.router.navigate(['/weather']);
  }

}
