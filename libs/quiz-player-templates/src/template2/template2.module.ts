import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Template2LayoutComponent } from './template2-layout/template2-layout.component';
import { Template1Module } from '../template1/template1.module';

@NgModule({
  declarations: [Template2LayoutComponent],
  imports: [
    CommonModule,
    Template1Module
  ],
  entryComponents: [
    Template2LayoutComponent
  ]
})
export class Template2Module {
  static defaultEntryComponent = Template2LayoutComponent;
}
