import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Button} from '../models/button.enum';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ButtonService {

  private ButtonSubject: Subject<Button>;
  public Button$: Observable<Button>;

  constructor() {
    this.ButtonSubject = new Subject<Button>();
    this.Button$ = this.ButtonSubject.asObservable();
  }

  dispatchButtonPress(button: Button) {
    this.ButtonSubject.next(button);
  }

}
