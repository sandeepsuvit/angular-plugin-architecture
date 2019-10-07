import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Template1LayoutComponent } from './template1-layout/template1-layout.component';

@NgModule({
  declarations: [Template1LayoutComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [
    Template1LayoutComponent
  ]
})
export class Template1Module {
  static entry = Template1LayoutComponent;
}
