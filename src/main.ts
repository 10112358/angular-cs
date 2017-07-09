import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

import { AppModule } from './app/';
platformBrowserDynamic().bootstrapModule(AppModule);

//import { PCenterModule } from './app/pcenter2/pcenter.module';
//platformBrowserDynamic().bootstrapModule(PCenterModule);

