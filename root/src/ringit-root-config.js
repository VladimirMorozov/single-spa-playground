import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const localEsApps = ['@ringit/vitya'];
const useLocalEs = false; // todo use env or something

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    if (useLocalEs && localEsApps.includes(name)) {
      
      return import(
        /* webpackIgnore: true */
        name
      ).then(pp => pp.prom);
    } else {
      let pendingApp = System.import(name);
      return pendingApp.then(loadedApp => {
        console.log(name, loadedApp, loadedApp.default ? loadedApp.default() : null)
        if (loadedApp.prom) {
          return loadedApp.prom;
        } else {
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
