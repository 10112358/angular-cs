import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule,JsonpModule ,Http} from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { SharedModule } from '../shared/shared.module';

//import { UseJqueryComponent } from '../use-jquery/use-jquery.component';


import { PCenterComponent } from './pcenter.component';
import { pcenterRoutes } from './pcenter.routes';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
        }),
        SharedModule,
        ToastModule.forRoot(),
        RouterModule.forRoot(pcenterRoutes)
],
    exports: [],
    declarations: [
     // UseJqueryComponent,
      PCenterComponent],
    providers: [],
      bootstrap: [PCenterComponent]
})
export class PCenterModule { }
