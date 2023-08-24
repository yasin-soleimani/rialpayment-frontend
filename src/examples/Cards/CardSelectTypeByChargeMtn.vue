<template>
  <transition-group appear @before-enter="beforeEnter" @enter="enter">
    <button
      @click="selectChargeTypeMtn(item)"
      v-for="item in typeByChargeMtn"
      :key="item.reChargeCode"
      class="
        card
        item_charge_type
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
import { defineComponent } from "vue";
import gsap from "gsap";
interface TypeByChargeMtn {
  title: string;
  reChargeCode: number;
  id: number;
  active: boolean;
}
export default defineComponent({
  name: "CardSelectTypeByChargeMtn",

  setup() {
    const beforeEnter = (el: any) => {
      (el.style.opacity = 0), (el.style.transform = "translateY(-80px)");
    };

    const enter = (el: any) => {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        y: 0,
      });
    };

    return { beforeEnter, enter };
  },

  data(): any {
    return {
      typeByChargeMtn: [
        { title: "معمولی", reChargeCode: 20, id: 2, active: false },
        { title: "شگفت انگیز", reChargeCode: 19, id: 2, active: false },
        { title: "قبض داعمی", reChargeCode: 0, id: 2, active: false },
      ],
    };
  },

  methods: {
    selectChargeTypeMtn(item: TypeByChargeMtn): void {
      store.dispatch("panel/setOperatorByCharge", item.id);
      store.dispatch("panel/setReChargeCodeByCharge", item.reChargeCode);
      this.setTypeOperatorActive(item);
    },

    setTypeOperatorActive(item: TypeByChargeMtn): void {
      this.setAllTypeOperatorActive();
      const index = this.typeByChargeMtn.findIndex(
        (el: any) => el.reChargeCode === item.reChargeCode
      );
      if (index > -1) {
        this.typeByChargeMtn[index].active = true;
      }
    },

    setAllTypeOperatorActive(): void {
      for (let i = 0; i < this.typeByChargeMtn.length; i++) {
        this.typeByChargeMtn[i].active = false;
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
