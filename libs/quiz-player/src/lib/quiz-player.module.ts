import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizPlayerComponent } from './quiz-player/quiz-player.component';
import { ClientTemplateLoaderService } from './template-loader/client-template-loader.service';
import { TemplateConfigProvider } from './template-loader/template-config-provider';
import { TemplateLoaderService } from './template-loader/template-loader.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [QuizPlayerComponent],
  exports: [QuizPlayerComponent],
  providers: [
    // Provide the default loader for the loader service
    { provide: TemplateLoaderService, useClass: ClientTemplateLoaderService },
    // Configuration provider, this would load the default config before application initializes
    TemplateConfigProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: (provider: TemplateConfigProvider) => () => provider.loadConfig(),
      multi: true,
      deps: [TemplateConfigProvider]
    }
  ]
})
export class QuizPlayerModule {}
