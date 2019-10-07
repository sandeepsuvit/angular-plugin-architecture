import { APP_CONFIG } from '@adc-workspace/app-config';
import { QuizPlayerModule } from '@adc-workspace/quiz-player';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    QuizPlayerModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [
    { provide: APP_CONFIG, useValue: environment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
