import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}



// add data in app [simple data]
import { data } from './data/users';
localStorage.setItem('json', data);

// add data in app [specific data]
import { dataSer } from './data/dataTree';
localStorage.setItem('inf', dataSer);





platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
