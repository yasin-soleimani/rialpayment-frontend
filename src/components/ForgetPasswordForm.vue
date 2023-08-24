<template>
  <form role="form" class="loginForm">
    <label>گذرواژه جدید</label>

    <input
      dir="rtl"
      class="form-control"
      type="password"
      placeholder="گذرواژه جدید"
      v-model="password"
    />

    <label class="mt-3">تکرار گذرواژه</label>

    <input
      dir="rtl"
      class="form-control"
      type="password"
      placeholder="تکرار گذرواژه"
      v-model="confirm"
    />

    <!-- <vsud-switch id="rememberMe" checked>
      گذرواژه خود را فراموش کرده اید؟
    </vsud-switch> -->
    <div class="text-center">
      <vsud-button
        @click.prevent="submitResetPasswordForm"
        class="my-4 mb-2"
        variant="gradient"
        color="info"
        fullWidth
        >ارسال
      </vsud-button>
    </div>
  </form>
</template>

<script lang="ts">
// import VsudSwitch from "@/components/VsudSwitch.vue";
import VsudButton from "@/components/VsudButton.vue";
import store from "@/store";
export default {
  name: "ForgetPasswordForm",

  methods: {
    submitResetPasswordForm(): void {
      store.dispatch("auth/submitResetPasswordForm");
    },
  },

  computed: {
    password: {
      get(): string {
        return store.state.auth.resetPassword.password;
      },
      set(value: string): void {
        store.dispatch("auth/updatePasswordResetPassword", value);
      },
    },

    confirm: {
      get(): string {
        return store.state.auth.resetPassword.confirm;
      },
      set(value: string): void {
        store.dispatch("auth/updateConfirmResetPassword", value);
      },
    },
  },

  components: {
    VsudButton,
    // VsudSwitch,
  },
};
</script>
