import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// add data in app
import { data } from './data/users'
localStorage.setItem('json', data)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
