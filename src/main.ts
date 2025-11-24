import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { VueQueryPlugin } from "@tanstack/vue-query";
import router from "@app/router";
import App from "@app/App.vue";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(createPinia());
app.use(VueQueryPlugin);
app.use(router);

app.mount("#app");
