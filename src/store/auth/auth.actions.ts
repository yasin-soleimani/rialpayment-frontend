import { MUTATIONS } from "@/constants/mutations";
import { authService } from "@/http/auth";
import router from "@/router";
import { ActionTree } from "vuex";
import store, { RootState } from "..";
import { AuthState } from "./auth.module";
import Token from "@/http/token";

export const AUTH_ACTIONS: ActionTree<AuthState, RootState> = {
  // auth
  updateAction(context): void {
    context.commit(MUTATIONS.auth.updateAtion);
  },

  toggleShowAlert(context) {
    context.commit(MUTATIONS.auth.toggleShowAlert);
  },

  updateMobileLoginForm(contexxt, value: string): void {
    contexxt.commit(MUTATIONS.auth.updateMobileLoginForm, value);

    value.length === 11
      ? store.dispatch("app/toggleDisabledButtonOff")
      : store.dispatch("app/toggleDisabledButtonTrue");
  },

  updatePasswordLoginForm(context, value: string): void {
    context.commit(MUTATIONS.auth.updatePasswordLoginForm, value);
  },

  updateMobileRegisterForm(context, value: string): void {
    context.commit(MUTATIONS.auth.updateMobileRegisterForm, value);
  },

  updatePasswordRegisterForm(context, value: string): void {
    context.commit(MUTATIONS.auth.updatePasswordRegisterForm, value);
  },

  submitLoginForm(context): void {
    authService
      .login()
      .then((response) => {
        context.commit(MUTATIONS.auth.setResponseText, response.data.message);
        localStorage.setItem("user", response.data.data.accessToken);
        router.push({ name: "Dashboard" });
        store.dispatch("app/toggleShowSidebarOn");
        store.dispatch("app/toggleLoadingApp");
      })
      .catch((response) => {
        context.commit(
          MUTATIONS.auth.setResponseText,
          response.response.data.message
        );

        store.dispatch("auth/toggleShowAlert");
        setTimeout(() => {
          store.dispatch("auth/toggleShowAlert");
        }, 3000);
        store.dispatch("app/toggleLoadingApp");
      });
  },

  submitRegisterForm(context): void {
    authService
      .register()
      .then((response) => {
        context.commit(MUTATIONS.auth.setResponseText, response.data.message);
        store.dispatch("app.toggleLoadingApp");
        router.push({ name: "VerifyCode" });
      })
      .catch((response) => {
        context.commit(
          MUTATIONS.auth.setResponseText,
          response.response.data.message
        );
        store.dispatch("app/toggleLoadingApp");
        store.dispatch("auth/toggleShowAlert");
        setTimeout(() => {
          store.dispatch("auth/toggleShowAlert");
        }, 3000);
      });
  },

  updateMobileResendCode(context, value: string): void {
    context.commit(MUTATIONS.auth.updateMobileResendCode, value);
  },

  submitCodeResendForm(context): void {
    authService
      .codeResend()
      .then((response) => {
        context.commit(MUTATIONS.auth.setResponseText, response.data.message);
        router.push({ name: "VerifyCode" });
      })
      .catch((response) => {
        context.commit(
          MUTATIONS.auth.setResponseText,
          response.response.data.message
        );
      });
  },

  updateCodeVerifyCode(context, value: string): void {
    context.commit(MUTATIONS.auth.updateCodeVerifyCode, value);
  },

  submitVerifyCodeForm(context): void {
    authService
      .verifyCode()
      .then((response) => {
        context.commit(MUTATIONS.auth.setResponseText, response.data.message);
        router.push({ name: "ForgetPasswordForm" });
      })
      .catch((response) => {
        context.commit(
          MUTATIONS.auth.setResponseText,
          response.response.data.message
        );
      });
  },

  updatePasswordResetPassword(context, value: string): void {
    context.commit(MUTATIONS.auth.updatePasswordResetPassword, value);
  },

  updateConfirmResetPassword(context, value: string): void {
    context.commit(MUTATIONS.auth.updateConfirmResetPassword, value);
  },

  submitResetPasswordForm(context): void {
    authService
      .resetPassword()
      .then((response) => {
        context.commit(MUTATIONS.auth.setResponseText, response.data.message);
        router.push({ name: "LoginForm" });
      })
      .catch((response) => {
        context.commit(
          MUTATIONS.auth.setResponseText,
          response.response.data.message
        );
      });
  },

  //clear data

  clearDataLoginForm(context): void {
    context.commit(MUTATIONS.auth.clearDataLoginForm);
  },

  clearDataRegisterForm(context): void {
    context.commit(MUTATIONS.auth.clearDataRegisterForm);
  },
};
