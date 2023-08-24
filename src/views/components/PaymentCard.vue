<template>
  <div class="card h-100 mt-2">
    <div class="card-header pb-0 p-3">
      <div class="row">
        <div class="align-items-center">
          <h6 class="mb-0 font-weight-bold">
            لطفا مبلغ شارژ خود را انتخاب کنید
          </h6>
        </div>
      </div>
    </div>
    <div class="card-body p-3">
      <div class="row">
        <div class="parent_card_amount col-md-12 d-flex">
          <card-charge />
        </div>
        <hr class="horizontal dark my-sm-4" />

        <div>
          <div class="col-md-10 my-3 mx-auto">
            <form role="form" class="loginForm">
              <label class="text-sm font-weight-light">
                شماره موبایل خود را وارد کنید</label
              >

              <input
                dir="rtl"
                class="form-control"
                type="text"
                placeholder="موبایل"
                maxlength="11"
                v-model="mobile"
              />

              <div class="text-center">
                <vsud-button
                  @click.prevent="paymentCharge"
                  class="col-md-3 my-4 mb-2"
                  variant="gradient"
                  color="active"
                  ><span v-if="!loading">خرید شارژ</span>
                  <span
                    v-if="loading"
                    class="spinner-border spinner-border-sm"
                  ></span>
                </vsud-button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VsudButton from "@/components/VsudButton.vue";
import CardCharge from "@/examples/Cards/CardCharge.vue";
import store from "@/store";

export default {
  name: "payment-card",
  components: {
    VsudButton,
    CardCharge,
  },

  computed: {
    mobile: {
      get(): string {
        return store.state.panel.dataReCharge.mobile;
      },

      set(value: string): void {
        store.dispatch("panel/updateMobileReCharge", value);
      },
    },

    loading(): boolean {
      return store.state.app.loading;
    },
  },

  methods: {
    paymentCharge() {
      store.dispatch("panel/submitRechargeForm");
      store.dispatch("app/toggleLoadingApp");
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .parent_card_amount {
    display: block !important;
  }
}
</style>
