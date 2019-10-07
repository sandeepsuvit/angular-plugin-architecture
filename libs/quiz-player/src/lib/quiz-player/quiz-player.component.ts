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
      // Get the reference to the module
      const moduleRef = moduleFactory.create(this.injector);

      // Select the default component to load from the templates. This referene 
      // can be found at the module level where the  static reference to the 
      // component is defined like `static defaultEntryComponent = Component;`
      const entryComponent = (moduleFactory.moduleType as any).defaultEntryComponent;
      
      // Get the component factory
      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
      
      // Create the component on the container specified
      this.vcRef.createComponent(compFactory);
    });
  }
}
