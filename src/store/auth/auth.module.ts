import { Module } from "vuex";
import { RootState } from "..";
import { AUTH_ACTIONS } from "./auth.actions";
import { AUTH_MUTATIONS } from "./auth.mutations";
import { LoginForm } from "@/interface/loginForm";
import { RegisterForm } from "@/interface/registerForm";
import { ResendCode } from "@/interface/resendCode";
import { VerifyCode } from "@/interface/verifyCode";
import { ResetPassword } from "@/interface/resetPassword";

export interface AuthState {
  responseText: string;
  loginForm: LoginForm;
  registerForm: RegisterForm;
  resendCode: ResendCode;
  verifyCode: VerifyCode;
  resetPassword: ResetPassword;
  showAlert: boolean;
}

const INITIAL_STATE: AuthState = {
  responseText: "",
  showAlert: false,
  loginForm: {
    mobile: "",
    password: "",
  },

  registerForm: {
    mobile: "",
    password: "",
  },

  resendCode: {
    mobile: "",
  },

  verifyCode: {
    mobile: "",
    code: "",
  },

  resetPassword: {
    password: "",
    confirm: "",
  },
};

export const auth: Module<AuthState, RootState> = {
  actions: AUTH_ACTIONS,
  getters: {},
  mutations: AUTH_MUTATIONS,
  state: INITIAL_STATE,
  namespaced: true,
};
