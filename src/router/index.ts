import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Taxi from "@/views/Taxi.vue";
import Charge from "@/views/Charge.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Billing from "@/views/Billing.vue";
import Internet from "@/views/Internet.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import LoginForm from "@/components/LoginForm.vue";
import ResendCodeForgetPassword from "@/components/ResendCodeForgetPassword.vue";
import ForgetPasswordForm from "@/components/ForgetPasswordForm.vue";
import VerifyCode from "@/components/VerifyCode.vue";
import Transactions from "@/views/Transactions.vue";
import WalletCharge from "@/views/WalletCharge.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/sign-in",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/Taxi",
    name: "Taxi",
    component: Taxi,
  },
  {
    path: "/charge",
    name: "Charge",
    component: Charge,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/Internet-page",
    name: "Internet",
    component: Internet,
  },
  {
    path: "/Trasactions",
    name: "Transactions",
    component: Transactions,
  },
  {
    path: "/Wallet-charge",
    name: "WalletCharge",
    component: WalletCharge,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
    children: [
      {
        path: "login",
        name: "LoginForm",
        component: LoginForm,
      },
      {
        path: "resendCodeForgetPassword",
        name: "ResendCodeForgetPassword",
        component: ResendCodeForgetPassword,
      },
      {
        path: "forgetPasswordForm",
        name: "ForgetPasswordForm",
        component: ForgetPasswordForm,
      },
      {
        path: "verifyCode",
        name: "VerifyCode",
        component: VerifyCode,
      },
    ],
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
