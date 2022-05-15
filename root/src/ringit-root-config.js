import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    if (name === '@ringit/vitya') {
      
      return import(
        /* webpackIgnore: true */
        'http://localhost:3000/src/main.js'
      );
    } else {
      let pendingApp = System.import(name);
      pendingApp.then(loadedApp => {
        console.log(name, loadedApp, loadedApp.default ? loadedApp.default() : null)
      });
      return pendingApp;
    }

  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
