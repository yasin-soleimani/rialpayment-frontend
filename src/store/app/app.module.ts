import { Module } from "vuex";
import { RootState } from "..";
import { APP_ACTIONS } from "./app.actions";
import { APP_MUTATIONS } from "./app.mutations";
import { ShowChargeType } from "@/interface/showChargeType";

export interface AppState {
  app: boolean;
  hideConfigButton: boolean;
  isPinned: boolean;
  showConfig: boolean;
  isTransparent: string;
  isRTL: boolean;
  mcolor: string;
  isNavFixed: boolean;
  isAbsolute: boolean;
  showNavs: boolean;
  showSidenav: boolean;
  showNavbar: boolean;
  showFooter: boolean;
  showMain: boolean;
  responseText: string;
  showAlert: boolean;
  showBillsList: boolean;
  sidebar: boolean;
  sidebarMobile: boolean;
  navbar: boolean;
  loading: boolean;
  bg_sidebar: boolean;
  disabled: boolean;
}

const INITAIL_APP: AppState = {
  app: false,
  hideConfigButton: false,
  isPinned: true,
  showConfig: false,
  isTransparent: "bg-white",
  isRTL: true,
  mcolor: "",
  isNavFixed: false,
  isAbsolute: false,
  showNavs: true,
  showSidenav: true,
  showNavbar: true,
  showFooter: true,
  showMain: true,
  responseText: "",
  showAlert: true,
  showBillsList: true,
  sidebar: true,
  sidebarMobile: false,
  // TODO:
  navbar: true,
  loading: false,
  bg_sidebar: false,
  disabled: true,
};

export const app: Module<AppState, RootState> = {
  actions: APP_ACTIONS,
  getters: {},
  mutations: APP_MUTATIONS,
  state: INITAIL_APP,
  namespaced: true,
};
