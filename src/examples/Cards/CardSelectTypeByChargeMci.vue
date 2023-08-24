<template>
  <transition-group appear @before-enter="beforeEnter" @enter="enter">
    <button
      @click="selectChargeTypeMci(item)"
      v-for="item in typeByChargeMci"
      :key="item.reChargeCode"
      class="
        item_charge_type
        card
        w-30
        text-center
        justify-content-center
        col-md-2
        mx-2
        my-2
      "
      :class="{ activeCard: item ? item.active : false }"
      style="align-items: center"
    >
      <div class="card-body">
        <!-- <h5 class="card-title">Special title treatment</h5> -->

        <div>
          <p>{{ item.title }}</p>
        </div>
      </div>
    </button>
  </transition-group>
</template>

<script lang="ts">
import store from "@/store";
// import { TypeOperator } from "@/interface/componentType/typeOperator";
import { defineComponent } from "vue";
import gsap from "gsap";

interface TypeByChargeMci {
  title: string;
  reChargeCode: number;
  operator: number;
  active: boolean;
  id: number;
}

export default defineComponent({
  name: "CardSelectTypeByChargeMci",

  setup() {
    const beforeEnter = (el: any) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(-80px)";
    };

    const enter = (el: any) => {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        y: 0,
        x: 0,
      });
    };

    return { beforeEnter, enter };
  },

  data(): any {
    return {
      typeByChargeMci: [
        {
          title: "معمولی",
          reChargeCode: 1002,
          operator: 1,
          active: false,
          id: 1,
        },
        {
          title: "بانوان",
          reChargeCode: 1004,
          operator: 1,
          active: false,
          id: 2,
        },
        {
          title: "جوانان",
          reChargeCode: 1004,
          operator: 1,
          active: false,
          id: 3,
        },
      ],
    };
  },

  methods: {
    selectChargeTypeMci(item: TypeByChargeMci): void {
      store.dispatch("panel/setOperatorByCharge", item.operator);
      store.dispatch("panel/setReChargeCodeByCharge", item.reChargeCode);
      this.setTypeOperatorActive(item);
      store.dispatch("panel/toggleReCharge");
    },

    setTypeOperatorActive(item: TypeByChargeMci): void {
      this.setAllTypeOperatorActive();
      const index = this.typeByChargeMci.findIndex(
        (el: any) => el.id === item.id
      );
      if (index > -1) {
        this.typeByChargeMci[index].active = true;
      }
    },

    setAllTypeOperatorActive(): void {
      for (let i = 0; i < this.typeByChargeMci.length; i++) {
        this.typeByChargeMci[i].active = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.activeCard {
  background: #162a68;
  color: white;
  box-shadow: 8px 8px 8px #cfcfcf;
}

@media only screen and (max-width: 600px) {
  .item_charge_type {
    width: 100% !important;
    margin: auto !important;
    margin-top: 10px !important;
  }
}
</style>
