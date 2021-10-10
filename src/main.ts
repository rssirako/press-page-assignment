import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import { Quasar } from "quasar";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Implicitly has any type
import quasarUserOptions from "./quasar-user-options";

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(store)
  .use(router)
  .mount("#app");
