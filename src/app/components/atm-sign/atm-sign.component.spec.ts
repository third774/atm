import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmSignComponent } from './atm-sign.component';

describe('AtmSignComponent', () => {
  let component: AtmSignComponent;
  let fixture: ComponentFixture<AtmSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
