import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Template4LayoutComponent } from './template4-layout/template4-layout.component';

@NgModule({
  declarations: [Template4LayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [Template4LayoutComponent],
  entryComponents: [Template4LayoutComponent]
})
export class Template4Module {
  static defaultEntryComponent = Template4LayoutComponent;
}
