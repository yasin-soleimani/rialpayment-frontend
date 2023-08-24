<template>
  <div
    @click="selectOperatorByCharge(item)"
    style="justify-content: space-between; filter: opacity(0.5)"
    class="item_card_charge card w-40 mx-2 justify-content-between"
    :class="{ activeCard: item ? item.active : false }"
  >
    <div class="p-3 pt-0 text-center card-body">
      <span class="text-xs">
        <img
          class="my-3 rounded"
          v-bind:src="item ? require(`@/assets/img/charge/${item.logo}`) : ''"
          alt="logo-charge"
          width="100"
          height="100"
        />
      </span>

      <!-- <h6 class="mb-0 text-center">{{ item.title }}</h6> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TypeOperator } from "@/interface/componentType/typeOperator";

export default defineComponent({
  name: "default-info-card",
  emits: ["item-selected"],
  props: {
    item: {
      type: Object as () => TypeOperator,
    },
  },

  methods: {
    selectOperatorByCharge(item: TypeOperator): void {
      this.$emit("item-selected", item);
    },
  },
});
</script>

<style lang="scss" scoped>
.activeCard {
  filter: none !important;
  // border: 0.5px solid teal;
  box-shadow: 8px 8px 8px #cfcfcf;
}

@media only screen and (max-width: 600px) {
  .item_card_charge {
    width: 100% !important;
    margin: auto !important;
    margin-top: 10px !important;
  }
}
</style>
