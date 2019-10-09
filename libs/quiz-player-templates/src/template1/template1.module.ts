import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Template1LayoutComponent } from './template1-layout/template1-layout.component';
import { QptSingleChoiceComponent } from './components/qpt-single-choice/qpt-single-choice.component';
import { QptMultipleChoiceComponent } from './components/qpt-multiple-choice/qpt-multiple-choice.component';

@NgModule({
  declarations: [
    Template1LayoutComponent,
    QptSingleChoiceComponent,
    QptMultipleChoiceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QptSingleChoiceComponent,
    QptMultipleChoiceComponent
  ],
  entryComponents: [
    Template1LayoutComponent
  ]
})
export class Template1Module {
  static defaultEntryComponent = Template1LayoutComponent;
}
