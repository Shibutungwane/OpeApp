import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter,withExperimentalAutoCleanupInjectors} from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AuthInterceptor } from './auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,withExperimentalAutoCleanupInjectors()), provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(),withInterceptors([AuthInterceptor])),
 
  ]
};
