<template>
  <div
    @click="selectInternetItem(item)"
    v-for="item in internetPackageList"
    :key="item.message"
    class="card text-center col-md-4 mx-2 my-2"
  >
    <div class="card-body">
      <!-- <h5 class="card-title">Special title treatment</h5> -->
      <img
        :src="item.logo"
        alt="logo_internet_package"
        width="100"
        height="100"
      />
      <div>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
export default {
  name: "InternetPackageCard",

  data(): any {
    return {
      internetPackageList: [
        {
          logo: require("../../assets/img/charge/logo_hamrah_aval.png"),
          text: "همراه اول",
          id: 1,
        },
        {
          logo: require("../../assets/img/charge/logo_irancell.png"),
          text: "ایرانسل",
          id: 2,
        },
        {
          logo: require("../../assets/img/charge/logo_rightel.png"),
          text: "رایتل",
          id: 3,
        },
        {
          logo: require("../../assets/img/Billing/logo_aptel.png"),
          text: "شاپرک",
          id: 4,
        },
        {
          logo: require("../../assets/img/Billing/logo_shatel.png"),
          text: "شاتل",
          id: 5,
        },
      ],
    };
  },

  methods: {
    selectInternetItem(item: any): void {
      store.dispatch("panel/setNameInternetPackageType", item.text);
      store.dispatch("panel/setOperatorInternetPackageType", item.id);
      store.dispatch("panel/setLogoInternetPackage", item.logo);
    },
  },
};
</script>
