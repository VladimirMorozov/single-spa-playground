import './index.css'
import { createApp, h } from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue'

// createApp(App).mount('#app')

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
        },
      });
    },
  },
  handleInstance: (app) => {
    // app.use(router);
  }
});

export let appPromise = new Promise(r => setTimeout(() => { r(vueLifecycles) }, 2000));

//export const bootstrap = vueLifecycles.bootstrap;
//export const mount = vueLifecycles.mount;
//export const unmount = vueLifecycles.unmount;