<template>
  <form role="form" class="loginForm">
    <label>موبایل</label>

    <input
      dir="rtl"
      class="form-control"
      type="text"
      placeholder="موبایل"
      maxlength="11"
      v-model="mobile"
    />

    <label class="mt-3">گذرواژه</label>
    <input
      dir="rtl"
      class="form-control"
      type="password"
      placeholder="گذرواژه"
      v-model="password"
    />
    <div class="d-flex justify-content-between">
      <label
        class="mt-3 mx-2 font-weight-light text-sm"
        @click="goToResendCodeForgetPassword"
        id="rememberMe"
      >
        گذرواژه خود را فراموش کرده اید؟
      </label>

      <label class="mt-3" @click="verify">تایید حساب کاربری</label>
    </div>
    <div class="text-center">
      <vsud-button
        type
        @click.prevent="submitLoginForm"
        class="my-4 mb-2"
        variant="gradient"
        color="info"
        fullWidth
      >
        <span v-if="!loading"> ورود به حساب </span>
        <span v-if="loading" class="spinner-border spinner-border-sm"></span>
      </vsud-button>
    </div>
  </form>
</template>

<script lang="ts">
import store from "@/store";
// import VsudSwitch from "@/components/VsudSwitch.vue";
import VsudButton from "@/components/VsudButton.vue";
import router from "@/router";

export default {
  name: "LoginForm",

  methods: {
    goToResendCodeForgetPassword(): void {
      router.push({ name: "ResendCodeForgetPassword" });
    },

    submitLoginForm(): void {
      store.dispatch("auth/submitLoginForm");
      store.dispatch("app/toggleLoadingApp");
    },
    verify(): void {
      router.push({ name: "ResendCodeForgetPassword" });
    },
  },
  computed: {
    loading(): boolean {
      return store.state.app.loading;
    },
    mobile: {
      get(): string {
        return store.state.auth.loginForm.mobile;
      },

      set(value: string): void {
        store.dispatch("auth/updateMobileLoginForm", value);
      },
    },

    password: {
      get(): string {
        return store.state.auth.loginForm.password;
      },

      set(value: string): void {
        store.dispatch("auth/updatePasswordLoginForm", value);
      },
    },
  },

  components: {
    VsudButton,
    // VsudSwitch,
  },
};
</script>
