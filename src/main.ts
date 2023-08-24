import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import "@/assets/css/fonts.css";
import "@/scss/theme.scss";
import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import SoftUIDashboard from "./soft-ui-dashboard";

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(SoftUIDashboard);
appInstance.use(Vue3Lottie);
appInstance.use(Toast);

appInstance.mount("#app");
