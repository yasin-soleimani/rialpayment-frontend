<template>
  <form role="form" class="loginForm">
    <label>کد ارسال شده به شماره موبایل شما</label>

    <input
      dir="rtl"
      class="form-control"
      type="text"
      placeholder="کد ارسال شده"
      maxlength="4"
      v-model="code"
    />

    <label class="mt-3 font-weight-light text-sm" id="rememberMe" checked>
      گذرواژه خود را فراموش کرده اید؟
    </label>
    <div class="text-center">
      <vsud-button
        @click.prevent="submitVerifyCode"
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
  name: "VerifyCode",

  methods: {
    submitVerifyCode(): void {
      // router.push({ name: "ForgetPasswordForm" });
      store.dispatch("auth/submitVerifyCodeForm");
    },
  },

  computed: {
    code: {
      get(): string {
        return store.state.auth.verifyCode.code;
      },
      set(value: string): void {
        store.dispatch("auth/updateCodeVerifyCode", value);
      },
    },
  },

  components: {
    VsudButton,
    // VsudSwitch,
  },
};
</script>
