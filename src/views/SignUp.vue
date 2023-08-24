<template>
  <div
    class="pt-5 page-header align-items-start min-vh-50 pb-11"
    :style="{
      backgroundImage:
        'url(' +
        require('@/assets/img/curved-images/background-rialpayment.png') +
        ')',
    }"
  >
    <star />
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container">
      <div class="row justify-content-center">
        <div class="mx-auto text-center col-lg-6">
          <h1 class="mt-5 mb-2 text-white">Rialpayment</h1>
          <p class="text-white text-lead h6 py-4">
            برای ایجاد حساب در سیستم پرداخت ریالی ریال پیمنت فقط کافیست فرم زیر
            را تکمیل کنید
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
      <div class="mx-auto col-xl-4 col-lg-5 col-md-7">
        <div class="card z-index-0">
          <div class="pt-4 text-center card-header">
            <h5>فرم ثبت نام</h5>
          </div>
          <div class="px-3 row px-xl-5 px-sm-4">
            <transition appear @before-enter="beforeEnter" @enter="enter">
              <div class="mt-2 position-relative text-center">
                <img
                  width="200"
                  src="../assets/img/curved-images/logo-circle-rialpayment.png"
                  alt="photo_logo"
                />
              </div>
            </transition>
          </div>
          <div class="card-body">
            <form class="registerForm" role="form">
              <div class="mb-3">
                <input
                  dir="rtl"
                  class="form-control"
                  type="text"
                  placeholder="مویابل"
                  maxLength="11"
                  aria-label="mobile"
                  v-model="mobile"
                />
              </div>
              <div class="mb-3">
                <input
                  dir="rtl"
                  class="form-control"
                  type="password"
                  placeholder="گذرواژه"
                  v-model="password"
                />
              </div>
              <div class="mb-3">
                <vsud-input
                  type="password"
                  placeholder="تکرار گذرواژه"
                  aria-label="confirm"
                  dir="rtl"
                />
              </div>
              <vsud-checkbox id="flexCheckDefault" checked>
                در صورت داشتن کد معرف تیک را بزنید
              </vsud-checkbox>

              <div class="text-center">
                <vsud-button
                  @click.prevent="submitRegisterForm"
                  color="dark"
                  fullWidth
                  variant="gradient"
                  class="my-4 mb-2"
                  ><span v-if="!loading">ثبت نام</span>
                  <span
                    v-if="loading"
                    class="spinner-border spinner-border-sm"
                  ></span
                ></vsud-button>
              </div>
              <p class="text-sm mt-3 mb-0 text-center">
                قبلا ثبت نام کرده اید؟
                <a
                  @click="goToLogin"
                  href="javascript:;"
                  class="text-dark font-weight-bolder mx-2"
                  >ورود به حساب</a
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-footer />
</template>

<script lang="ts">
import AppFooter from "@/examples/PageLayout/Footer.vue";
import VsudInput from "@/components/VsudInput.vue";
import VsudCheckbox from "@/components/VsudCheckbox.vue";
import VsudButton from "@/components/VsudButton.vue";
import router from "@/router";
import store from "@/store";
import star from "@/components/Star.vue";
import gsap from "gsap";

export default {
  name: "sign-up",

  setup() {
    const beforeEnter = (el: any) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(-80px)";
    };

    const enter = (el: any) => {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        y: 0,
      });
    };

    return { beforeEnter, enter };
  },

  components: {
    AppFooter,
    VsudInput,
    VsudCheckbox,
    VsudButton,
    star,
  },

  methods: {
    goToLogin(): void {
      router.push({ name: "Sign In" });
    },

    submitRegisterForm(): void {
      store.dispatch("auth/submitRegisterForm");
      store.dispatch("app/toggleLoadingApp");
    },
  },

  computed: {
    mobile: {
      get(): string {
        return store.state.auth.registerForm.mobile;
      },

      set(value: string): void {
        store.dispatch("auth/updateMobileRegisterForm", value);
      },
    },

    password: {
      get(): string {
        return store.state.auth.registerForm.password;
      },

      set(value: string): void {
        store.dispatch("auth/updatePasswordRegisterForm", value);
      },
    },

    loading(): boolean {
      return store.state.app.loading;
    },
  },
  created() {
    store.state.app.hideConfigButton = true;
    store.state.app.showNavbar = false;
    store.state.app.showSidenav = false;
    // store.state.app.showFooter = false;
    store.dispatch("app/toggleShowSidebarOff");
    store.dispatch("app/toggleOffShowNavbar");
  },
  beforeUnmount() {
    store.state.app.hideConfigButton = false;
    store.state.app.showNavbar = true;
    store.state.app.showSidenav = true;
    store.dispatch("app/toggleOnShowNavbar");
    store.dispatch("auth/clearDataRegisterForm");
  },
};
</script>

<style lang="scss" scoped>
.registerForm {
  text-align: right !important;
}
</style>
