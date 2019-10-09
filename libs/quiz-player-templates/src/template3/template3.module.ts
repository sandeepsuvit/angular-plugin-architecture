import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Template3LayoutComponent } from './template3-layout/template3-layout.component';
import { Template1Module } from '../template1/template1.module';

@NgModule({
  declarations: [Template3LayoutComponent],
  imports: [
    CommonModule,
    Template1Module
  ],
  entryComponents: [
    Template3LayoutComponent,
  ]
})
export class Template3Module {
  static defaultEntryComponent = Template3LayoutComponent;
}
