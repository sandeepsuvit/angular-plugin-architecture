import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template4LayoutComponent } from './template4-layout.component';

describe('Template4LayoutComponent', () => {
  let component: Template4LayoutComponent;
  let fixture: ComponentFixture<Template4LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template4LayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template4LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
