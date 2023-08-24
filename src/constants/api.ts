const API = {
  auth: {
    login: "/v1/user/login",
    register: "/v1/user/register",
    codeResend: "/v1/user/code/resend",
    verifyCode: "/v1/user/verify/code",
    resetPassword: "/v1/user/reset/password",
  },

  panel: {
    reCharge: "/v1/simcard/charge/purchase",
    billPayment: "/v1/bill-inquiry/payment",
    billInfo: "/v1/bill-inquiry/info",
    packageCategories: "/v1/simcard/packageCategories",
    packages: "/v1/simcard/packages",
  },
};

export default API;
