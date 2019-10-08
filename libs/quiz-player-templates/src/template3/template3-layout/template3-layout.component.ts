import { Component, OnInit } from '@angular/core';
import { environment } from 'apps/tce-app/src/environments/environment';

@Component({
  selector: 'adc-workspace-template3-layout',
  templateUrl: './template3-layout.component.html',
  styleUrls: ['./template3-layout.component.scss']
})
export class Template3LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Can access environment properties
    console.log(environment.pluginsRoot);
  }

}
