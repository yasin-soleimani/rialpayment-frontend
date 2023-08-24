<template>
  <transition-group appear @before-enter="beforeEnter" @enter="enter">
    <button
      @click="selectChargeTypeRightel(item)"
      v-for="item in typeByChargeRightel"
      :key="item.title"
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
interface TypeByChargeRightel {
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
      typeByChargeRightel: [
        { title: "معمولی", reChargeCode: 2, id: 3, active: false },
        { title: "شورانگیز", reChargeCode: 2, id: 3, active: false },
      ],
    };
  },

  methods: {
    selectChargeTypeRightel(item: any): void {
      store.dispatch("panel/setOperatorByCharge", item.id);
      store.dispatch("panel/setReChargeCodeByCharge", item.reChargeCode);
      this.setTypeOperatorActive(item);
    },

    setTypeOperatorActive(item: TypeByChargeRightel): void {
      this.setAllTypeOperatorActive();
      const index = this.typeByChargeRightel.findIndex(
        (el: any) => el.title === item.title
      );
      if (index > -1) {
        this.typeByChargeRightel[index].active = true;
      }
    },

    setAllTypeOperatorActive(): void {
      for (let i = 0; i < this.typeByChargeRightel.length; i++) {
        this.typeByChargeRightel[i].active = false;
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
