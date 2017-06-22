import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-labels',
  templateUrl: './button-labels.component.html',
  styleUrls: ['./button-labels.component.scss']
})
export class ButtonLabelsComponent implements OnInit {

  @Input() left1: string;
  @Input() left2: string;
  @Input() left3: string;
  @Input() left4: string;
  @Input() right1: string;
  @Input() right2: string;
  @Input() right3: string;
  @Input() right4: string;

  constructor() { }

  ngOnInit() {
  }

}
