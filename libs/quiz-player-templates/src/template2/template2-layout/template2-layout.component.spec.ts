import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template2LayoutComponent } from './template2-layout.component';

describe('Template2LayoutComponent', () => {
  let component: Template2LayoutComponent;
  let fixture: ComponentFixture<Template2LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template2LayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template2LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
