import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideServerRendering, withRoutes, RenderMode } from '@angular/ssr';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { App } from './app/app';
import { routes } from './app/app.routes';
const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(
    App,
    {
      providers: [
        provideRouter(
          routes,
          withInMemoryScrolling({
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
          }),
        ),
        provideClientHydration(withEventReplay()),
        provideServerRendering(withRoutes([{ path: '**', renderMode: RenderMode.Prerender }])),
      ],
    },
    context,
  );
export default bootstrap;
