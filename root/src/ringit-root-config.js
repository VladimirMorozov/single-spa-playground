import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const localEsApps = ['@ringit/vitya'];
const useLocalEs = process.env.NODE_ENV === 'development'; // some other special env var could be used

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    if (useLocalEs && localEsApps.includes(name)) {
      return import(
        /* webpackIgnore: true */
        name
      ).then(pp => pp.appPromise);
    } else {
      let pendingApp = System.import(name);
      return pendingApp.then(loadedApp => {
        if (loadedApp.appPromise) {
          return loadedApp.appPromise;
        } else if (loadedApp.mount) {
          return loadedApp;
        } else {
          console.error('Expected an app or a promise resolving to an app, but loaded: ', loadedApp);
          return loadedApp;
        }
      });
    }

  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
