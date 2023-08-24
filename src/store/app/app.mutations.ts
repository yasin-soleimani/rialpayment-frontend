import { MUTATIONS } from "@/constants/mutations";
import { MutationTree } from "vuex";
import { AppState } from "./app.module";

export const APP_MUTATIONS: MutationTree<AppState> = {
  [MUTATIONS.app.app](state): void {
    state.app = !state.app;
  },

  [MUTATIONS.app.toggleConfigurator](state): void {
    state.showConfig = !state.showConfig;
  },
  navbarMinimize(state): void {
    const sidenav_show = document.querySelector(".g-sidenav-show") as Element;
    const sidenav = document.getElementById("sidenav-main") as HTMLElement;

    if (sidenav_show.classList.contains("g-sidenav-pinned")) {
      // sidenav_show.classList.remove("g-sidenav-pinned");
      setTimeout(function () {
        // sidenav.classList.remove("bg-white");
      }, 100);
      state.isPinned = false;
    } else {
      sidenav_show.classList.add("g-sidenav-pinned");
      state.isPinned = false;
    }
  },

  sidebarType(state, payload) {
    state.isTransparent = payload;
  },
  navbarFixed(state) {
    if (state.isNavFixed === false) {
      state.isNavFixed = true;
    } else {
      state.isNavFixed = false;
    }
  },

  [MUTATIONS.app.toggleShowBillsList](state): void {
    state.showBillsList = !state.showBillsList;
  },

  [MUTATIONS.app.toggleShowSidebarOn](state): void {
    state.sidebar = true;
  },

  [MUTATIONS.app.toggleShowSidebarOff](state): void {
    state.sidebar = false;
  },

  [MUTATIONS.app.toggleShowSidebar](state): void {
    state.sidebar = !state.sidebar;
  },

  [MUTATIONS.app.toggleOffShowNavbar](state): void {
    state.navbar = false;
  },

  [MUTATIONS.app.toggleOnShowNavbar](state): void {
    state.navbar = true;
  },

  [MUTATIONS.app.toggleLoadingApp](state): void {
    state.loading = !state.loading;
  },
  [MUTATIONS.app.getBgSidebar](state): void {
    state.bg_sidebar = !state.bg_sidebar;
  },
  [MUTATIONS.app.toggleDisabledButtonTrue](state): void {
    state.disabled = true;
  },

  [MUTATIONS.app.toggleDisabledButtonOff](state): void {
    state.disabled = false;
  },

  [MUTATIONS.app.toggleSidebarMobile](state): void {
    state.sidebarMobile = !state.sidebarMobile;
  },
};
