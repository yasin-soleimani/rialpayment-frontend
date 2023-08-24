import { MUTATIONS } from "@/constants/mutations";
import { ActionTree } from "vuex";
import { RootState } from "..";
import { AppState } from "./app.module";

export const APP_ACTIONS: ActionTree<AppState, RootState> = {
  //app
  app(context): void {
    context.commit(MUTATIONS.app.app);
  },

  toggleSidebarColor({ commit }, payload) {
    commit("sidebarType", payload);
  },
  toggleConfigurator(context): void {
    context.commit(MUTATIONS.app.toggleConfigurator);
  },

  navbarMinimize(context): void {
    context.commit(MUTATIONS.app.navbarMinimize);
  },

  toggleShowNavbar(context): void {
    context.commit(MUTATIONS.app.toggleShowNavbar);
  },

  toggleShowBillsList(context): void {
    context.commit(MUTATIONS.app.toggleShowBillsList);
  },

  toggleShowSidebarOn(context): void {
    context.commit(MUTATIONS.app.toggleShowSidebarOn);
  },

  toggleShowSidebarOff(context): void {
    context.commit(MUTATIONS.app.toggleShowSidebarOff);
  },

  toggleShowSidebar(context): void {
    context.commit(MUTATIONS.app.toggleShowSidebar);
  },

  toggleOffShowNavbar(context): void {
    context.commit(MUTATIONS.app.toggleOffShowNavbar);
  },

  toggleOnShowNavbar(context): void {
    context.commit(MUTATIONS.app.toggleOnShowNavbar);
  },
  toggleLoadingApp(context): void {
    context.commit(MUTATIONS.app.toggleLoadingApp);
  },

  getBgSidebar(context): void {
    context.commit(MUTATIONS.app.getBgSidebar);
  },

  toggleDisabledButtonTrue(context): void {
    context.commit(MUTATIONS.app.toggleDisabledButtonTrue);
  },

  toggleDisabledButtonOff(context): void {
    context.commit(MUTATIONS.app.toggleDisabledButtonOff);
  },

  toggleSidebarMobile(context): void {
    context.commit(MUTATIONS.app.toggleSidebarMobile);
  },
};
