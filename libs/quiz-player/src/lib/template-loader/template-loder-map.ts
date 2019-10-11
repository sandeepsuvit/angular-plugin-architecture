import * as core from '@angular/core';
import * as common from '@angular/common';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as platform from '@angular/platform-browser';
import * as rxjs from 'rxjs';
import * as tslib from 'tslib';

export const TEMPLATE_EXTERNALS_MAP = {
    // Angular dependencies
    'ng.core': core,
    'ng.common': common,
    'ng.forms': forms,
    'ng.router': router,
    'ng.platform': platform,
    // External support dependencies
    rxjs,
    tslib,
    // Include additional support dependencies here
};
