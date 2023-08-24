import { MUTATIONS } from "@/constants/mutations";
import { maxValue } from "@vuelidate/validators";
import { MutationTree } from "vuex";
import { PanelState } from "./panel.module";

export const PANEL_MUTATIONS: MutationTree<PanelState> = {
  [MUTATIONS.panel.showChargeTypeMci](state): void {
    state.showChargeType.showChargeTypeMci = true;
    state.showChargeType.showChargeTypeMtn = false;
    state.showChargeType.showChargeTypeRightel = false;
  },

  [MUTATIONS.panel.showChargeTypeMtn](state): void {
    state.showChargeType.showChargeTypeMci = false;
    state.showChargeType.showChargeTypeMtn = true;
    state.showChargeType.showChargeTypeRightel = false;
  },

  [MUTATIONS.panel.showChargeTypeRightel](state): void {
    state.showChargeType.showChargeTypeMci = false;
    state.showChargeType.showChargeTypeMtn = false;
    state.showChargeType.showChargeTypeRightel = true;
  },
  [MUTATIONS.panel.setAmountByCharge](state, value: number): void {
    state.dataReCharge.amount = value;
  },

  [MUTATIONS.panel.setOperatorByCharge](state, value: number): void {
    state.dataReCharge.operator = value;
  },

  [MUTATIONS.panel.updateMobileReCharge](state, value: string): void {
    state.dataReCharge.mobile = value;
  },

  [MUTATIONS.panel.setReChargeCodeByCharge](state, value: number): void {
    state.dataReCharge.rechargecode = value;
  },

  [MUTATIONS.panel.toggleReCharge](state): void {
    state.reCharge.styleAmountCharge = true;
  },

  [MUTATIONS.panel.billingLogoSelecting](state, value: string): void {
    state.billing.billingLogoSelecting = value;
  },

  [MUTATIONS.panel.billTitleSelecting](state, value: string): void {
    state.billing.billTitleSelecting = value;
  },

  [MUTATIONS.panel.setNameInternetPackageType](state, value: string): void {
    state.internetPackageType.name = value;
  },

  [MUTATIONS.panel.setOperatorInternetPackageType](state, value: number): void {
    state.internetPackageType.operator = value;
  },

  [MUTATIONS.panel.setPlaceholderBillSelecting](state, value: string): void {
    state.billing.placeholderText = value;
  },

  [MUTATIONS.panel.setIdBilling](state, value: string): void {
    state.billing.id = value;
  },

  [MUTATIONS.panel.setIsActiveBilling](state, value: boolean): void {
    state.billing.isActive = value;
  },

  [MUTATIONS.panel.setOperatorBilling](state, value: number): void {
    state.billing.operator = value;
  },

  [MUTATIONS.panel.setLogoInternetPackage](state, value: string): void {
    state.internetPackageType.logo = value;
  },
  [MUTATIONS.panel.selectInternetType](state, value: string): void {
    switch (value) {
      case "mci":
        state.internetPackageType.showInternetTypeMci = true;
        state.internetPackageType.showInternetTypeMtn = false;
        state.internetPackageType.showInternetTypeRightel = false;
        state.internetPackageType.showInternetTypeshaparak = false;
        state.internetPackageType.showInternetTypeShatel = false;
        break;
      case "mtn":
        state.internetPackageType.showInternetTypeMtn = true;
        state.internetPackageType.showInternetTypeMci = false;
        state.internetPackageType.showInternetTypeRightel = false;
        state.internetPackageType.showInternetTypeshaparak = false;
        state.internetPackageType.showInternetTypeShatel = false;
        break;
      case "rightel":
        state.internetPackageType.showInternetTypeRightel = true;
        state.internetPackageType.showInternetTypeMci = false;
        state.internetPackageType.showInternetTypeMtn = false;
        state.internetPackageType.showInternetTypeshaparak = false;
        state.internetPackageType.showInternetTypeShatel = false;

        break;
      case "shaparak":
        state.internetPackageType.showInternetTypeshaparak = true;
        state.internetPackageType.showInternetTypeMci = false;
        state.internetPackageType.showInternetTypeMtn = false;
        state.internetPackageType.showInternetTypeRightel = false;
        state.internetPackageType.showInternetTypeShatel = false;
        break;
      case "shatel":
        state.internetPackageType.showInternetTypeShatel = true;
        state.internetPackageType.showInternetTypeMci = false;
        state.internetPackageType.showInternetTypeMtn = false;
        state.internetPackageType.showInternetTypeRightel = false;
        state.internetPackageType.showInternetTypeshaparak = false;
        break;
    }
  },

  //clear data

  [MUTATIONS.panel.clearDataChargeInput](state): void {
    state.dataReCharge.mobile = "";
  },
  [MUTATIONS.panel.pushInternetPackageList](state, value: string[]): void {
    state.internetPackageType.internetPackageList = value;
  },
};
