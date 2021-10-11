import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import { Quasar } from "quasar";
import axios from "axios";
import VueAxios from 'vue-axios'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Implicitly has any type
import quasarUserOptions from "./quasar-user-options";

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");
