import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Template1LayoutComponent } from './template1-layout/template1-layout.component';
import { QptSingleChoiceComponent } from './components/qpt-single-choice/qpt-single-choice.component';
import { QptMultipleChoiceComponent } from './components/qpt-multiple-choice/qpt-multiple-choice.component';
import { QuillModule } from 'ngx-quill';
import { EditorCmpComponent } from './components/editor-cmp/editor-cmp.component';

@NgModule({
  declarations: [
    Template1LayoutComponent,
    QptSingleChoiceComponent,
    QptMultipleChoiceComponent,
    EditorCmpComponent
  ],
  imports: [
    CommonModule,
    QuillModule.forRoot()
  ],
  exports: [
    QptSingleChoiceComponent,
    QptMultipleChoiceComponent,
    EditorCmpComponent
  ],
  entryComponents: [
    Template1LayoutComponent
  ]
})
export class Template1Module {
  static defaultEntryComponent = Template1LayoutComponent;
}
