import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QptMultipleChoiceComponent } from './qpt-multiple-choice.component';

describe('QptMultipleChoiceComponent', () => {
  let component: QptMultipleChoiceComponent;
  let fixture: ComponentFixture<QptMultipleChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QptMultipleChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QptMultipleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
