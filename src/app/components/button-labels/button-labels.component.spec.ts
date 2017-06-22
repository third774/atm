import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLabelsComponent } from './button-labels.component';

describe('ButtonLabelsComponent', () => {
  let component: ButtonLabelsComponent;
  let fixture: ComponentFixture<ButtonLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
