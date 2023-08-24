<template>
  <div
    @click="billSelecting(item)"
    v-for="item in listBilling"
    :key="item.message"
    class="item_billing card text-center col-md-3 mx-2 my-2"
  >
    <div
      class="card-body"
      style="filter: opacity(0.5); transition: 0.3s"
      :class="{ activeCard: item ? item.asActive : false }"
    >
      <!-- <h5 class="card-title">Special title treatment</h5> -->
      <img :src="item.logo" alt="logo_billing" width="100" height="100" />
      <div>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";
interface ListBilling {
  logo: string;
  name: string;
  operator: number;
  placeholder: string;
  isActive: boolean;
}
export default defineComponent({
  name: "ItemBilling",

  data(): any {
    return {
      listBilling: [
        {
          logo: require("../../assets/img/Billing/water_logo.svg"),
          name: "آب",
          operator: 1,
          placeholder: "شناسه قبض",
          isActive: false,
        },
        {
          logo: require("../../assets/img/Billing/electric_logo.svg"),
          name: "برق",
          operator: 2,
          placeholder: "شناسه قبض",
          isActive: true,
        },
        {
          logo: require("../../assets/img/Billing/gas_logo.svg"),
          name: "گاز",
          operator: 3,
          placeholder: "شماره اشتراک",
          isActive: false,
        },
        {
          logo: require("../../assets/img/Billing/telephone_logo.svg"),
          name: "تلفن",
          operator: 4,
          placeholder: "شماره تلفن ثابت",
          isActive: false,
        },
        {
          logo: require("../../assets/img/Billing/hamrah_logo.svg"),
          name: "همراه اول",
          operator: 51,
          placeholder: "شماره موبایل",
          isActive: false,
        },
        {
          logo: require("../../assets/img/Billing/rightel_logo.svg"),
          name: "رایتل",
          operator: 53,
          placeholder: "شماره موبایل",
          isActive: false,
        },
      ],
    };
  },

  computed: {
    photo(): string {
      return store.state.panel.billing.billingLogoSelecting;
    },
  },

  methods: {
    billSelecting(item: any) {
      store.dispatch("panel/billingLogoSelecting", item.logo);
      store.dispatch("panel/billTitleSelecting", item.name);
      store.dispatch("panel/setPlaceholderBillSelecting", item.placeholder);
      store.dispatch("panel/setIsActiveBilling", item.isActive);
      store.dispatch("panel/setOperatorBilling", item.operator);

      store.state.app.showBillsList === true
        ? store.dispatch("app/toggleShowBillsList")
        : "";
      this.setTypeOperatorActive(item);
    },

    setTypeOperatorActive(item: ListBilling): void {
      this.setAllTypeOperatorActive();
      const index = this.listBilling.findIndex(
        (el: any) => el.operator === item.operator
      );
      if (index > -1) {
        this.listBilling[index].asActive = true;
      }
    },

    setAllTypeOperatorActive(): void {
      for (let i = 0; i < this.listBilling.length; i++) {
        this.listBilling[i].asActive = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.activeCard {
  filter: none !important;
  box-shadow: 8px 8px 8px #cfcfcf;
}

@media only screen and (max-width: 600px) {
  .item_billing {
    width: 90% !important;
    margin: auto !important;
    margin-top: 10px !important;
  }
}
</style>
