<template>
  <div class="pb-4 mt-5 container-fluid">
    <div class="row">
      <div class="card col-lg-7 mb-lg-0 mb-4">
        <div class="col-lg-12 col-md-12 mb-md-0 mb-4 mt-0">
          <card-wallet />
        </div>
      </div>

      <div class="col-lg-5">
        <person-information />
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-lg-12 col-md-12 col-sm-12 mb-md-0">
        <projects-card />
      </div>
      <!-- <div class="col-lg-5 col-md-6">
        <Orders-card />
      </div> -->
    </div>
  </div>
  <app-footer />
</template>
<script>
// import OrdersCard from "./components/OrdersCard.vue";
import ProjectsCard from "./components/ProjectsCard.vue";
import AppFooter from "@/examples/Footer.vue";
import store from "@/store";
import PersonInformation from "@/examples/Cards/PersonInformation.vue";
import CardWallet from "@/examples/Cards/CardWallet.vue";

export default {
  name: "dashboard-default",

  data() {
    return {
      stats: {
        iconBackground: "bg-gradient-info",
      },
    };
  },
  components: {
    ProjectsCard,
    // OrdersCard,
    AppFooter,
    PersonInformation,
    CardWallet,
  },

  created() {
    store.dispatch("app/toggleShowSidebarOn");
    window.location.href = "#";
  },
};
</script>
