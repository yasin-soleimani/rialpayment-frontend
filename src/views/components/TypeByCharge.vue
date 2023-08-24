<template>
  <div v-if="showTypeByCharge" class="card mt-4">
    <div class="card-header pb-0 p-3">
      <div class="row">
        <div class="d-flex align-items-center">
          <h6 class="mb-0 font-weight-bold">
            لطفا نوع شارژ خود را انتخاب کنید
          </h6>
        </div>
      </div>
    </div>
    <div class="card-body p-3">
      <div class="row">
        <div class="parent_charge_type col-md-12 d-flex justify-content-around">
          <card-select-type-by-charge-mci v-if="showTypeMci" />
          <card-select-type-by-charge-mtn v-if="showTypeMtn" />
          <card-select-type-by-charge-rightel v-if="showChargeTypeRightel" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CardSelectTypeByChargeMci from "@/examples/Cards/CardSelectTypeByChargeMci.vue";
import CardSelectTypeByChargeMtn from "@/examples/Cards/CardSelectTypeByChargeMtn.vue";
import CardSelectTypeByChargeRightel from "@/examples/Cards/CardSelectTypeByChargeRightel.vue";
import store from "@/store";

export default {
  name: "payment-card",
  components: {
    CardSelectTypeByChargeMci,
    CardSelectTypeByChargeMtn,
    CardSelectTypeByChargeRightel,
  },

  computed: {
    showTypeByCharge(): boolean {
      return store.state.panel.reCharge.styleAmountCharge;
    },
    showTypeMci(): boolean {
      return store.state.panel.showChargeType.showChargeTypeMci;
    },

    showTypeMtn(): boolean {
      return store.state.panel.showChargeType.showChargeTypeMtn;
    },

    showChargeTypeRightel(): boolean {
      return store.state.panel.showChargeType.showChargeTypeRightel;
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .parent_charge_type {
    display: block !important;
  }
}
</style>
