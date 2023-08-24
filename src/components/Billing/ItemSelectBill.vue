<template>
  <div class="card shadow-none">
    <div class="card-body">
      <div class="text-center justify-content-center">
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <div class="mb-3">
            <img :src="logo" alt="bill_logo" width="100" height="100" />
          </div>
        </transition>

        <br />
        <div style="text-align: right">
          <label class="mx-2 py-2 text-sm font-weight-light"
            >لطفا {{ placeholderText }} خود را وارد کنید</label
          >
        </div>
        <div class="mb-3">
          <input
            class="form-control"
            type="text"
            :placeholder="placeholderText"
            v-model="id"
            aria-label="confirm"
            dir="rtl"
          />
        </div>
      </div>

      <hr class="horizontal dark my-sm-4" />
      <vsud-checkbox id="flexCheckDefault" checked>
        <span class="text-sm"> ذخیره در لیست قبض‌های من </span>
      </vsud-checkbox>
      <div class="d-grid gap-2 mt-3">
        <button
          @click.prevent="submitFormBilling"
          class="btn bg-active text-white"
          type="button"
        >
          ارسال مشخصات
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import VsudCheckbox from "@/components/VsudCheckbox.vue";
import gsap from "gsap";
export default {
  name: "ItemSelectBill",

  setup() {
    const beforeEnter = (el: any) => {
      el.style.transform = "translateY(-60px)";
    };

    const enter = (el: any) => {
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "bounce.out",
      });
    };

    return { beforeEnter, enter };
  },

  methods: {
    submitFormBilling(): void {
      store.dispatch("panel/submitFormBillInfo");
    },
  },

  computed: {
    logo(): string {
      return store.state.panel.billing.billingLogoSelecting;
    },

    placeholderText(): string {
      return store.state.panel.billing.placeholderText;
    },

    id: {
      get(): string {
        return store.state.panel.billing.id;
      },
      set(value: string): void {
        store.dispatch("panel/setIdBilling", value);
      },
    },
  },

  components: {
    VsudCheckbox,
  },
};
</script>
