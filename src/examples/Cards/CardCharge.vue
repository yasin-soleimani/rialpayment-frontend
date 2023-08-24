<template>
  <button
    @click="selectAmountByCharge(item)"
    v-for="item in cardCharge"
    :key="item.showAmount"
    class="
      item_card_amount
      card
      w-20
      text-center
      d-flex
      justify-content-center
      mx-2
      my-2
    "
    :class="{ activeCard: item ? item.active : false }"
    style="align-items: center"
  >
    <div class="card-body">
      <!-- <h5 class="card-title">Special title treatment</h5> -->

      <div>
        <p>{{ item.showAmount }} ریال</p>
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";

interface TypeCardCharge {
  showAmount: string;
  amount: number;
  active: boolean;
  id: number;
}

interface Data {
  cardCharge: TypeCardCharge[];
}
export default defineComponent({
  name: "CardCharge",

  data(): Data {
    return {
      cardCharge: [
        {
          amount: 10000,
          showAmount: "۱۰,۰۰۰",
          active: false,
          id: 1,
        },
        {
          amount: 20000,
          showAmount: "۲۰,۰۰۰",
          active: false,
          id: 2,
        },
        {
          amount: 50000,
          showAmount: "۵۰,۰۰۰",
          active: false,
          id: 3,
        },
        {
          amount: 100000,
          showAmount: "۱۰۰,۰۰۰",
          active: false,
          id: 4,
        },
        {
          amount: 200000,
          showAmount: "۲۰۰,۰۰۰",
          active: false,
          id: 5,
        },
      ],
    };
  },

  methods: {
    selectAmountByCharge(item: TypeCardCharge): void {
      store.dispatch("panel/setAmountByCharge", item.amount);
      this.setTypeOperatorActive(item);
    },

    setTypeOperatorActive(item: TypeCardCharge): void {
      this.setAllTypeOperatorActive();
      const index = this.cardCharge.findIndex((el: any) => el.id === item.id);
      if (index > -1) {
        this.cardCharge[index].active = true;
      }
    },

    setAllTypeOperatorActive(): void {
      for (let i = 0; i < this.cardCharge.length; i++) {
        this.cardCharge[i].active = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.activeCard {
  // background: #17c1e8;
  background-color: #162a68;
  color: white;
  box-shadow: 8px 8px 8px #cfcfcf;
}

@media only screen and (max-width: 600px) {
  .item_card_amount {
    width: 100% !important;
    margin: auto !important;
    margin-top: 10px !important;
  }
}
</style>
