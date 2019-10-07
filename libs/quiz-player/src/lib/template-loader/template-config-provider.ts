import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional, PLATFORM_ID } from "@angular/core";
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ITemplateConfig } from './template-config.interface';

@Injectable()
export class TemplateConfigProvider {
    config: ITemplateConfig;
    TEMPLATE_CONFIG_PATH = 'assets/templates-config.json';

    constructor(
        private http: HttpClient,
        @Inject(PLATFORM_ID) private platformId: {},
        @Inject('APP_BASE_URL') @Optional() private readonly baseUrl: string
    ) {
        if (isPlatformBrowser(platformId)) {
            this.baseUrl = document.location.origin;
        }
    }

    /**
     * Load template configuration while application starts
     *
     * @returns
     * @memberof TemplateConfigProvider
     */
    public loadConfig() {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.baseUrl}/${this.TEMPLATE_CONFIG_PATH}`).pipe(
                map((res: any) => res),
                catchError((error) => throwError(error))
            ).subscribe(confRes => {
                this.config = confRes;
                resolve(true);
            })
        });
    }
}