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

    <label class="mt-3 font-weight-light text-sm" id="rememberMe" checked>
      گذرواژه خود را فراموش کرده اید؟
    </label>
    <div class="text-center">
      <vsud-button
        @click.prevent="submitCodeResendForm"
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
  name: "ResendCodeForgetPassword",

  methods: {
    submitCodeResendForm(): void {
      // router.push({ name: "ForgetPasswordForm" });
      store.dispatch("auth/submitCodeResendForm");
    },
  },

  computed: {
    mobile: {
      get(): string {
        return store.state.auth.resendCode.mobile;
      },
      set(value: string): void {
        store.dispatch("auth/updateMobileResendCode", value);
      },
    },
  },

  components: {
    VsudButton,
    // VsudSwitch,
  },
};
</script>
