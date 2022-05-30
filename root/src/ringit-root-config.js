import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import './state-pub-sub'

const localEsApps = ['@ringit/vitya'];
let failedSystemJsLoadModules = [];
const useLocalEs = process.env.NODE_ENV === 'development'; // some other special env var could be used

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
      let appImportPromise;
      if (useLocalEs && localEsApps.includes(name)) {
        appImportPromise = import(
          /* webpackIgnore: true */
          name
        );
      } else {
        if (failedSystemJsLoadModules.includes(name)) {
          // failed module won't be reloaded otherwise
          System.delete(System.resolve(name));
          failedSystemJsLoadModules = failedSystemJsLoadModules.filter(m => m !== name);
        }
        appImportPromise = System.import(name);
      }
      return appImportPromise.then(loadedApp => {
        if (loadedApp.appPromise) {
          return loadedApp.appPromise;
        } else if (loadedApp.mount) {
          return loadedApp;
        } else {
          const err = new Error('Expected an app or a promise resolving to an app, but loaded: ');
          err.data = [loadedApp];
          throw err;
        }
      }).catch(e => {
        // Single spa has error handling configured in constructRoutes, 
        // but for some reason it gets called many times when navigating away from the error and then breaks the routing.
        // So here is an attempt to handle app loading errors manually. 
        // This won't handle errors for app registration in single spa, but unexpected network errors should be handled.
        failedSystemJsLoadModules.push(name);
        const errorData = e.data ?? [];
        console.error('Error while loading ' + name, ...errorData);
        document.querySelector('main').innerHTML = '<h1>Lehekülge kuvamine ebaõnnestus. Proovi uuesti mõne aja pärast.</h1>';
        throw e;
      });
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
