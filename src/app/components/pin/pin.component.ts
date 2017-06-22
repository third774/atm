import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ButtonService} from '../../services/button.service';
import {Button} from '../../models/button.enum';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {CreditCardService} from '../../services/credit-card.service';
import {CreditCard} from '../../models/credit-card.enum';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit, OnDestroy {

  buttonSubscription: Subscription;

  pin = '';
  @ViewChild('pinInput') pinInput: ElementRef;

  constructor(private buttonService: ButtonService,
              private router: Router,
              private creditCardService: CreditCardService) {
  }

  ngOnInit() {
    this.buttonSubscription = this.buttonService.Button$.subscribe(button => this.handleButtonPress(button));
  }

  ngOnDestroy() {
    this.buttonSubscription.unsubscribe();
  }

  handleButtonPress(button: Button) {
    switch (button) {
      case Button.Right4:
        this.OK();
        break;
      case Button.Left4:
        this.Cancel();
    }
  }

  OK() {
    if (this.pin.length > 3) {
      const randomCardIndex = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
      this.creditCardService.selectedCard = CreditCard[CreditCard[randomCardIndex]];
      this.router.navigate(['/main-menu']);
    } else {
      this.pinInput.nativeElement.focus();
    }
  }

  Cancel() {
    alert('cancel clicked');
  }

}
