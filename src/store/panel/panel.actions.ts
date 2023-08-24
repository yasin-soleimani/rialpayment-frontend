import { MUTATIONS } from "@/constants/mutations";
import { ActionTree } from "vuex";
import store, { RootState } from "..";
import { PanelState } from "./panel.module";
import { panelService } from "@/http/panel";

export const PANEL_ACTIONS: ActionTree<PanelState, RootState> = {
  showChargeTypeMci(context): void {
    context.commit(MUTATIONS.panel.showChargeTypeMci);
  },

  showChargeTypeMtn(context): void {
    context.commit(MUTATIONS.panel.showChargeTypeMtn);
  },

  showChargeTypeRightel(context): void {
    context.commit(MUTATIONS.panel.showChargeTypeRightel);
  },

  setAmountByCharge(context, value: string): void {
    context.commit(MUTATIONS.panel.setAmountByCharge, value);
  },

  setOperatorByCharge(context, value: number): void {
    context.commit(MUTATIONS.panel.setOperatorByCharge, value);
  },

  updateMobileReCharge(context, value: string): void {
    context.commit(MUTATIONS.panel.updateMobileReCharge, value);
  },

  setReChargeCodeByCharge(context, value: number): void {
    context.commit(MUTATIONS.panel.setReChargeCodeByCharge, value);
  },

  toggleReCharge(context): void {
    context.commit(MUTATIONS.panel.toggleReCharge);
  },

  billingLogoSelecting(context, value: string): void {
    context.commit(MUTATIONS.panel.billingLogoSelecting, value);
  },

  billTitleSelecting(context, value: string): void {
    context.commit(MUTATIONS.panel.billTitleSelecting, value);
  },

  setNameInternetPackageType(context, value: string): void {
    context.commit(MUTATIONS.panel.setNameInternetPackageType, value);
  },

  setOperatorInternetPackageType(context, value: number): void {
    context.commit(MUTATIONS.panel.setOperatorInternetPackageType, value);
  },

  submitRechargeForm(context): void {
    panelService
      .reCharge()
      .then((response) => {
        context.commit(MUTATIONS.auth.setResponseText, response.data.message);
        store.dispatch("auth/toggleShowAlert");
        store.dispatch("app/toggleLoadingApp");
        setTimeout(() => {
          store.dispatch("auth/toggleShowAlert");
        }, 3000);
        alert(response.data.message);
      })
      .catch((response) => {
        context.commit(
          MUTATIONS.auth.setResponseText,
          response.response.data.message
        );

        store.dispatch("auth/toggleShowAlert");
        store.dispatch("app/toggleLoadingApp");
        setTimeout(() => {
          store.dispatch("auth/toggleShowAlert");
        }, 3000);
        alert(response.response.data.message);
      });
  },

  setPlaceholderBillSelecting(context, value: string): void {
    context.commit(MUTATIONS.panel.setPlaceholderBillSelecting, value);
  },

  setIdBilling(context, value: string): void {
    context.commit(MUTATIONS.panel.setIdBilling, value);
  },

  setIsActiveBilling(context, value: boolean): void {
    context.commit(MUTATIONS.panel.setIsActiveBilling, value);
  },

  submitFormBillPayment(context): void {
    panelService
      .billPayment()
      .then((response) => {
        context.commit(MUTATIONS.app.app);
      })
      .catch((response) => {});
  },

  setOperatorBilling(context, value: number): void {
    context.commit(MUTATIONS.panel.setOperatorBilling, value);
  },

  submitFormBillInfo(context): void {
    panelService
      .billInfo()
      .then((response) => {
        context.commit(MUTATIONS.app.app);
      })
      .catch((response) => {
        alert(response.response.data.message);
      });
  },

  setLogoInternetPackage(context, value: string): void {
    context.commit(MUTATIONS.panel.setLogoInternetPackage, value);
  },

  selectInternetType(context, value: string): void {
    context.commit(MUTATIONS.panel.selectInternetType, value);
  },

  getPackageCategories(context): void {
    panelService
      .packageCategories()
      .then((response) => {
        const item = response.data.data;

        for (let i = 0; i <= item.length; i++) {
          console.log(item[i].packageType);
        }
      })
      .catch((response) => {
        // console.log("false", response);
      });
  },

  getPackages(context): void {
    panelService.packages().then((response) => {
      context.commit(MUTATIONS.app.app);
    });
  },

  //clear data

  clearDataChargeInput(context): void {
    context.commit(MUTATIONS.panel.clearDataChargeInput);
  },
};
