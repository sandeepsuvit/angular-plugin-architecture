import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template3LayoutComponent } from './template3-layout.component';

describe('Template3LayoutComponent', () => {
  let component: Template3LayoutComponent;
  let fixture: ComponentFixture<Template3LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template3LayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template3LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
