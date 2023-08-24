<template>
  <button
    @click="selectInternetItem(item)"
    v-for="item in internetPackageList"
    :key="item.message"
    class="item_internet_package card w-20 text-center mx-2 my-2"
    :class="{ activeCard: item ? item.active : false }"
    style="filter: opacity(0.5)"
  >
    <div class="card-body mx-auto">
      <!-- <h5 class="card-title">Special title treatment</h5> -->
      <img
        :src="item.logo"
        alt="logo_internet_package"
        width="100"
        height="100"
      />
      <div>
        <p class="mt-2">{{ item.text }}</p>
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";

interface InternetPackageList {
  logo: string;
  text: string;
  name: string;
  id: number;
}
export default defineComponent({
  name: "InternetPackageItem",

  data(): any {
    return {
      internetPackageList: [
        {
          logo: require("../../assets/img/charge/logo_hamrah_aval.png"),
          text: "همراه اول",
          name: "mci",
          id: 1,
          active: false,
        },
        {
          logo: require("../../assets/img/charge/logo_irancell.png"),
          text: "ایرانسل",
          name: "mtn",
          id: 2,
          active: false,
        },
        {
          logo: require("../../assets/img/charge/logo_rightel.png"),
          text: "رایتل",
          name: "rightel",
          id: 3,
          active: false,
        },
        {
          logo: require("../../assets/img/Billing/logo_aptel.png"),
          text: "شاپرک",
          name: "shaparak",
          id: 4,
          active: false,
        },
        {
          logo: require("../../assets/img/Billing/logo_shatel.png"),
          text: "شاتل",
          name: "shatel",
          id: 5,
          active: false,
        },
      ],
    };
  },

  methods: {
    selectInternetItem(item: any): void {
      store.dispatch("panel/setNameInternetPackageType", item.text);
      store.dispatch("panel/setOperatorInternetPackageType", item.id);
      store.dispatch("panel/setLogoInternetPackage", item.logo);
      store.dispatch("panel/selectInternetType", item.name);
      this.setTypeOperatorActive(item);
      // console.log("print item click select internet package");
      // get data package internet
      store.dispatch("panel/getPackageCategories");
      setTimeout(() => {
        store.dispatch("panel/getPackages");
      }, 3000);
    },

    setTypeOperatorActive(item: InternetPackageList): void {
      this.setAllTypeOperatorActive();
      const index = this.internetPackageList.findIndex(
        (el: any) => el.id === item.id
      );
      if (index > -1) {
        this.internetPackageList[index].active = true;
      }
    },

    setAllTypeOperatorActive(): void {
      for (let i = 0; i < this.internetPackageList.length; i++) {
        this.internetPackageList[i].active = false;
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
  .item_internet_package {
    width: 100% !important;
    margin: auto !important;
    margin-top: 10px;
  }
}
</style>
