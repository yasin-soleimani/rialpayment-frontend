// import { createApp } from "vue";
import { createStore } from "vuex";
import { AuthState, auth } from "./auth/auth.module";
import { AppState, app } from "./app/app.module";
import { PanelState, panel } from "./panel/panel.module";
// import Vue from "Vue";
// import Vuex from "Vuex";

// export default createStore({
//   state: {
//     hideConfigButton: false,
//     isPinned: true,
//     showConfig: false,
//     isTransparent: "",
//     isRTL: false,
//     mcolor: "",
//     isNavFixed: false,
//     isAbsolute: false,
//     showNavs: true,
//     showSidenav: true,
//     showNavbar: true,
//     showFooter: true,
//     showMain: true,
//   },
//   mutations: {
//     toggleConfigurator(state) {
//       state.showConfig = !state.showConfig;
//     },
//     navbarMinimize(state) {
//       const sidenav_show = document.querySelector(".g-sidenav-show") as Element;
//       const sidenav = document.getElementById("sidenav-main") as HTMLElement;

//       if (sidenav_show.classList.contains("g-sidenav-pinned")) {
//         sidenav_show.classList.remove("g-sidenav-pinned");
//         setTimeout(function () {
//           sidenav.classList.remove("bg-white");
//         }, 100);
//         sidenav.classList.remove("bg-transparent");
//         state.isPinned = true;
//       } else {
//         sidenav_show.classList.add("g-sidenav-pinned");
//         sidenav.classList.add("bg-white");
//         sidenav.classList.remove("bg-transparent");
//         state.isPinned = false;
//       }
//     },
//     sidebarType(state, payload) {
//       state.isTransparent = payload;
//     },
//     navbarFixed(state) {
//       if (state.isNavFixed === false) {
//         state.isNavFixed = true;
//       } else {
//         state.isNavFixed = false;
//       }
//     },
//   },
//   actions: {
//     toggleSidebarColor({ commit }, payload) {
//       commit("sidebarType", payload);
//     },
//   },
//   getters: {},
// });

export interface RootState {
  auth: AuthState;
  app: AppState;
  panel: PanelState;
}

// Vue.use(Vuex);

export default createStore({
  modules: { auth, app, panel },
});
