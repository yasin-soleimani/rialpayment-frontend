import API from "@/constants/api";
import store from "@/store";
import axiosUtil from "@/Utils/axios.util";
import { AxiosResponse } from "axios";

async function login(): Promise<AxiosResponse> {
  const url = API.auth.login;
  const body = {
    mobile: store.state.auth.loginForm.mobile,
    password: store.state.auth.loginForm.password,
  };

  return axiosUtil.post(url, body);
}

async function register(): Promise<AxiosResponse> {
  const url = API.auth.register;
  const body = {
    mobile: store.state.auth.registerForm.mobile,
    password: store.state.auth.registerForm.password,
  };

  return axiosUtil.post(url, body);
}

async function codeResend(): Promise<AxiosResponse> {
  const url = API.auth.codeResend;
  const body = {
    mobile: store.state.auth.resendCode.mobile,
  };

  return axiosUtil.post(url, body);
}

async function verifyCode(): Promise<AxiosResponse> {
  const url = API.auth.verifyCode;
  const body = {
    mobile: store.state.auth.resendCode.mobile,
    code: store.state.auth.verifyCode.code,
  };

  return axiosUtil.post(url, body);
}

async function resetPassword(): Promise<AxiosResponse> {
  const url = API.auth.resetPassword;
  const body = {
    mobile: store.state.auth.resendCode.mobile,
    password: store.state.auth.resetPassword.password,
    code: store.state.auth.verifyCode.code,
  };

  return axiosUtil.post(url, body);
}

export const authService = {
  login,
  register,
  codeResend,
  verifyCode,
  resetPassword,
};
