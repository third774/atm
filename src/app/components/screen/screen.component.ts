import {Component, OnInit} from '@angular/core';
import {Button} from '../../models/button.enum';
import {ButtonService} from '../../services/button.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  // Create reference for use in template
  Button = Button;

  constructor(public buttonService: ButtonService) {
  }

  ngOnInit() {
  }

}
