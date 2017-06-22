import {Component, EventEmitter, OnInit} from '@angular/core';
import {CreditCard} from '../../models/credit-card.enum';
import {CreditCardService} from '../../services/credit-card.service';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.scss']
})
export class CreditCardsComponent implements OnInit {

  // Create reference to enum for use in template
  CreditCard = CreditCard;

  constructor(public creditCardService: CreditCardService) { }

  ngOnInit() {
  }

}
