<template>
  <div class="container-fluid mt-5">
    <!-- <div class="row align-items-center">
      <div class="col-lg-4 col-sm-8">
        <nav-pill />
      </div>
    </div> -->
    <div class="row">
      <div class="col-lg-8 mt-2">
        <div class="row mt-4">
          <div class="col-xl-12">
            <div class="row">
              <div
                class="
                  parent_card_charge
                  col-md-12
                  justify-content-between
                  d-flex
                "
                style="justify-content: space-between"
              >
                <default-info-card
                  style="transition: 0.5s"
                  @item-selected="selectOperatorByCharge"
                  :item="item"
                  v-for="item in operator"
                  :key="item.id"
                />
              </div>
            </div>
          </div>

          <div class="col-md-12 mb-4">
            <type-by-charge />
          </div>

          <div class="col-md-12">
            <payment-card />
          </div>
        </div>
      </div>
      <!-- <div class="col-lg-4 mt-2">
        <invoice-card />
      </div> -->
      <div class="col-lg-4 mt-3">
        <Orders-card />
      </div>
    </div>
    <!-- <div class="row mt-4"> -->
    <!-- <div class="col-md-7">
        <billing-card />
      </div> -->
    <!-- <div class="col-md-5 mt-4">
        <transaction-card />
      </div> -->
    <!-- </div> -->
  </div>
  <app-footer class="my-4" />
</template>

<script lang="ts">
import setTooltip from "@/assets/js/tooltip";
// import NavPill from "./components/NavPill.vue";
import DefaultInfoCard from "@/examples/Cards/DefaultInfoCard.vue";
import PaymentCard from "./components/PaymentCard.vue";
import OrdersCard from "@/views/components/OrdersCard.vue";
// import InvoiceCard from "./components/InvoiceCard.vue";
// import BillingCard from "./components/BillingCard.vue";
// import TransactionCard from "./components/TransactionCard.vue";
import AppFooter from "@/examples/Footer.vue";
import store from "@/store";
import TypeByCharge from "@/views/components/TypeByCharge.vue";
import { defineComponent } from "@vue/runtime-core";

interface TypeOperator {
  title: string;
  logo: string;
  active: boolean;
  id: number;
}

interface Data {
  operator: TypeOperator[];
}

export default defineComponent({
  name: "Charge",
  components: {
    // NavPill,
    DefaultInfoCard,
    PaymentCard,
    OrdersCard,
    // InvoiceCard,
    // BillingCard,
    // TransactionCard,
    AppFooter,
    TypeByCharge,
  },
  data(): Data {
    return {
      operator: [
        {
          title: "همراه اول",
          logo: "logo_hamrah_aval.png",
          active: false,
          id: 1,
        },
        {
          title: "ایرانسل",
          logo: "logo_irancell.png",
          active: false,
          id: 2,
        },
        {
          title: "رایتل",
          logo: "logo_rightel.png",
          active: false,
          id: 3,
        },
      ],
    };
  },
  methods: {
    selectOperatorByCharge(item: TypeOperator): void {
      this.setTypeOperatorActive(item);
      store.dispatch("panel/toggleReCharge");
      if (item.id === 1) {
        store.dispatch("panel/showChargeTypeMci");
      } else if (item.id === 2) {
        store.dispatch("panel/showChargeTypeMtn");
      } else if (item.id === 3) {
        store.dispatch("panel/showChargeTypeRightel");
      }
    },

    setTypeOperatorActive(item: TypeOperator): void {
      this.setAllTypeOperatorActive();
      const index = this.operator.findIndex((el) => el.id === item.id);
      if (index > -1) {
        this.operator[index].active = true;
      }
    },

    setAllTypeOperatorActive(): void {
      for (let i = 0; i < this.operator.length; i++) {
        this.operator[i].active = false;
      }
    },
  },
  mounted() {
    setTooltip();
  },
  beforeUnmount() {
    store.dispatch("panel/clearDataChargeInput");
  },

  created() {
    window.location.href = "#";
  },
});
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .parent_card_charge {
    display: block !important;
  }
}
</style>
