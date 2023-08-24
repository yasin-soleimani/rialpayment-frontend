import { Module } from "vuex";
import { RootState } from "..";
import { PANEL_ACTIONS } from "./panel.actions";
import { PANEL_MUTATIONS } from "./panel.mutations";
import { ShowChargeType } from "@/interface/showChargeType";
import { DataReCharge } from "@/interface/dataReCharge";
import { ReCharge } from "@/interface/reCharge";
import { Billing } from "@/interface/billing";
import { InternetPackageType } from "@/interface/internetPackageType";

export interface PanelState {
  showChargeType: ShowChargeType;
  dataReCharge: DataReCharge;
  reCharge: ReCharge;
  billing: Billing;
  internetPackageType: InternetPackageType;
}

const INITIAL_STATE: PanelState = {
  showChargeType: {
    showChargeTypeMci: false,
    showChargeTypeMtn: false,
    showChargeTypeRightel: false,
  },

  reCharge: {
    styleAmountCharge: false,
  },

  dataReCharge: {
    operator: 0,
    amount: 0,
    mobile: "",
    rechargecode: 0,
    optionalMessage: "افزایش شارژ توسط ریال پیمنت",
  },

  billing: {
    billingLogoSelecting: "",
    billTitleSelecting: "",
    placeholderText: "",
    id: "",
    operator: 0,
    isActive: false,
  },

  internetPackageType: {
    name: "",
    logo: "",
    operator: 0,
    showInternetTypeMci: false,
    showInternetTypeMtn: false,
    showInternetTypeRightel: false,
    showInternetTypeshaparak: false,
    showInternetTypeShatel: false,
    internetPackageList: [],
  },
};

export const panel: Module<PanelState, RootState> = {
  actions: PANEL_ACTIONS,
  getters: {},
  mutations: PANEL_MUTATIONS,
  state: INITIAL_STATE,
  namespaced: true,
};
