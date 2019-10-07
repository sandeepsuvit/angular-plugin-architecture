import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Template2LayoutComponent } from './template2-layout/template2-layout.component';

@NgModule({
  declarations: [Template2LayoutComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [
    Template2LayoutComponent
  ]
})
export class Template2Module {
  static defaultEntryComponent = Template2LayoutComponent;
}
