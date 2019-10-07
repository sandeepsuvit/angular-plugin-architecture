import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Template3LayoutComponent } from './template3-layout/template3-layout.component';

@NgModule({
  declarations: [Template3LayoutComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [
    Template3LayoutComponent,
  ]
})
export class Template3Module {
  static defaultEntryComponent = Template3LayoutComponent;
}
