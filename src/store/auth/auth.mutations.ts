import { MUTATIONS } from "@/constants/mutations";
import { MutationTree } from "vuex";
import { AuthState } from "./auth.module";

export const AUTH_MUTATIONS: MutationTree<AuthState> = {
  [MUTATIONS.auth.setResponseText](state, value): void {
    state.responseText = value;
  },

  [MUTATIONS.auth.toggleShowAlert](state): void {
    state.showAlert = !state.showAlert;
  },
  [MUTATIONS.auth.updateMobileLoginForm](state, value: string): void {
    state.loginForm.mobile = value;
  },
  [MUTATIONS.auth.updatePasswordLoginForm](state, value: string): void {
    state.loginForm.password = value;
  },
  [MUTATIONS.auth.updateMobileRegisterForm](state, value: string): void {
    state.registerForm.mobile = value;
  },
  [MUTATIONS.auth.updatePasswordRegisterForm](state, value: string): void {
    state.registerForm.password = value;
  },
  [MUTATIONS.auth.updateMobileResendCode](state, value: string): void {
    state.resendCode.mobile = value;
  },
  [MUTATIONS.auth.updateCodeVerifyCode](state, value: string): void {
    state.verifyCode.code = value;
  },
  [MUTATIONS.auth.updatePasswordResetPassword](state, value: string): void {
    state.resetPassword.password = value;
  },
  [MUTATIONS.auth.updateConfirmResetPassword](state, value: string): void {
    state.resetPassword.confirm = value;
  },
  [MUTATIONS.auth.clearDataLoginForm](state): void {
    (state.loginForm.mobile = ""), (state.loginForm.password = "");
  },

  [MUTATIONS.auth.clearDataRegisterForm](state): void {
    (state.registerForm.mobile = ""), (state.registerForm.password = "");
  },
};
