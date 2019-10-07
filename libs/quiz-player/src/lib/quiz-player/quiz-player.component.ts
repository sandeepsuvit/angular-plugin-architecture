import { APP_CONFIG } from '@adc-workspace/app-config';
import { Component, Inject, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TemplateConfigProvider } from '../template-loader/template-config-provider';
import { TemplateLoaderService } from '../template-loader/template-loader.service';

@Component({
  selector: 'adc-workspace-quiz-player',
  templateUrl: './quiz-player.component.html',
  styleUrls: ['./quiz-player.component.scss']
})
export class QuizPlayerComponent implements OnInit {
  @ViewChild('targetRef', { read: ViewContainerRef, static: true }) vcRef: ViewContainerRef;
  templateConfig: any;

  constructor(
    private injector: Injector,
    private templateLoader: TemplateLoaderService,
    private configProvider: TemplateConfigProvider,
    @Inject(APP_CONFIG) private appConfig: any,
  ) {
  }

  ngOnInit() {
    // All the configs that are loaded
    this.templateConfig = this.configProvider.config;
    
    // Default load tempalte
    // this.loadTemplate('qp-template-1');
  }

  /**
   * Load the template by name
   *
   * @param {string} pluginName
   * @memberof QuizPlayerComponent
   */
  loadTemplate(pluginName: string) {
    this.templateLoader.load(pluginName).then(moduleFactory => {
      const moduleRef = moduleFactory.create(this.injector);
      const entryComponent = (moduleFactory.moduleType as any).entry;
      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
      this.vcRef.createComponent(compFactory);
    });
  }
}
