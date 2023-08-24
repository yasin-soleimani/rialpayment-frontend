<template>
  <main dir="ltr" class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain Larger shadow">
                <div class="pb-0 card-header text-end">
                  <h3 class="font-weight-bolder text-info text-gradient">
                    RialPayment
                  </h3>
                  <p class="mb-0 lh-lg">
                    جهت ورود به حساب کاربری خود فرم زیر را پر کنید
                  </p>
                </div>

                <div class="card-body">
                  <router-view />
                  <star />
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm h6">
                    حساب کاربری ندارید؟
                    <a
                      @click="goToRegister"
                      href="javascript:;"
                      class="text-dark text-gradient font-weight-bold mx-2"
                      >ثبت نام</a
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-6 col-sm-12">
              <div
                class="
                  col-md-12
                  top-0
                  oblique
                  position-absolute
                  h-100
                  d-md-block d-none
                "
              >
                <div
                  class="
                    col-md-12
                    position-relative
                    bg-cover
                    oblique-image
                    position-absolute
                    fixed-top
                    ms-auto
                    h-100
                    z-index-0
                    ms-n6
                  "
                  :style="{
                    backgroundImage:
                      'url(' +
                      require('@/assets/img/curved-images/background-rialpayment.png') +
                      ')',
                  }"
                >
                  <div class="col-md-6 mx-auto mt-5">
                    <img
                      class="rialpayment-logo col-md-12"
                      src="../assets/img/curved-images/logo-circle-rialpayment.png"
                      alt="logo"
                    />
                  </div>
                  <star />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>

<script lang="ts">
import AppFooter from "@/examples/PageLayout/Footer.vue";
import store from "@/store";
import router from "@/router";
import Star from "@/components/Star.vue";
import "vue3-lottie/dist/style.css";

const body = document.getElementsByTagName("body")[0];
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    LottieAnimation: typeof import("vue3-lottie")["Vue3Lottie"];
  }
}
export {};

// app.use(Vue3Lottie, { name: "LottieAnimation" });
export default {
  name: "signin",

  components: {
    AppFooter,
    Star,
  },
  methods: {
    goToRegister(): void {
      router.push({ name: "Sign Up" });
    },
  },

  beforeMount() {
    store.state.app.hideConfigButton = true;
    store.state.app.showNavbar = false;
    store.state.app.showSidenav = false;
    store.state.app.sidebar = false;
    body.classList.remove("bg-gray-100");
    if (store.state.app.sidebar) {
      store.dispatch("app/toggleShowSidebarOff");
    }
  },
  beforeUnmount() {
    store.state.app.hideConfigButton = false;
    store.state.app.showNavbar = true;
    store.state.app.showSidenav = true;
    body.classList.add("bg-gray-100");
    store.dispatch("auth/clearDataLoginForm");
    store.dispatch("app/toggleOnShowNavbar");
  },

  created() {
    router.push({ name: "LoginForm" });
    store.dispatch("app/toggleShowSidebarOff");
    store.dispatch("app/toggleOffShowNavbar");
  },
};
</script>

<style lang="scss" scoped>
.loginForm {
  text-align: right !important;
}
.rialpayment-logo {
  padding: 20px;
  transition: 0.5s;
}

.shadow-rialpayment-logo {
  width: 50px;
  height: 200px;
  position: absolute;
  background: red;
  left: 200px;
  top: 400px;
  transform: rotate(150deg) translateX(-60px);
  z-index: 99;
}

.shadow-rialpayment-logo:hover {
  padding: 20px;
  margin: 30px;
  transform: rotate(150deg) translateX(-660px);
}
.rialpayment-logo:hover {
  padding: 0px !important;
}
</style>
