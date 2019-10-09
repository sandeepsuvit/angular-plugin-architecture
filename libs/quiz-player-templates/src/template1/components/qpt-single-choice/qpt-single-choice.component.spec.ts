import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QptSingleChoiceComponent } from './qpt-single-choice.component';

describe('QptSingleChoiceComponent', () => {
  let component: QptSingleChoiceComponent;
  let fixture: ComponentFixture<QptSingleChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QptSingleChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QptSingleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
