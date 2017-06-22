import { Injectable } from '@angular/core';
import {CreditCard} from '../models/credit-card.enum';

@Injectable()
export class CreditCardService {

  selectedCard: CreditCard;

  constructor() { }

}
