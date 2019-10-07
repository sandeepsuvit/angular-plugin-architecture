import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template1LayoutComponent } from './template1-layout.component';

describe('Template1LayoutComponent', () => {
  let component: Template1LayoutComponent;
  let fixture: ComponentFixture<Template1LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template1LayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template1LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
