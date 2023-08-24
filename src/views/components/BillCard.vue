<template>
  <div class="card h-100">
    <div v-if="!billList" class="p-3 pb-0 card-header">
      <div class="row">
        <div class="col-md-8 d-flex align-items-center">
          <h6 class="mb-0">پرداخت قبض {{ billName }}</h6>
        </div>
      </div>
    </div>
    <div v-if="!billList">
      <item-select-bill />
    </div>
    <div v-if="billList" class="card shadow-none">
      <div class="card-body">
        <div
          class="
            parent_item_billing
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <div>
            <h5 class="card-title">قبض‌ های من</h5>
          </div>
          <div class="button_bills_payment">
            <button type="button" class="btn btn-outline-info h6 mt-2">
              قبض های پرداخت شده
            </button>
          </div>
        </div>

        <hr class="horizontal dark my-sm-4" />

        <div class="justify-content-center text-center mx-uto">
          <button
            type="button"
            class="
              btn btn-info btn-lg btn-block
              justify-content-center
              mx-auto
              my-3
            "
          >
            پرداخت سریع !
          </button>
          <p class="h6 fw-lighter">
            شما هنوز قبضی را به لیست قبض‌های من اضافه نکرده‌اید.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import ItemSelectBill from "../../components/Billing/ItemSelectBill.vue";
export default {
  name: "profile-card",

  computed: {
    billName(): String {
      return store.state.panel.billing.billTitleSelecting;
    },

    billList(): boolean {
      return store.state.app.showBillsList;
    },
  },

  components: {
    ItemSelectBill,
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .parent_item_billing {
    display: block !important;
  }

  .button_bills_payment {
    text-align: center;
  }
}
</style>
