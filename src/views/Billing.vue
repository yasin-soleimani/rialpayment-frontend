<template>
  <div class="container-fluid mt-6">
    <div
      class="mt-4 page-header min-height-300 border-radius-xl"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/img/curved-images/curved14.jpg') + ')',
        backgroundPositionY: '50%',
      }"
    >
      <span class="mask bg-gradient-info opacity-6"></span>
    </div>
    <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
      <div class="row gx-4">
        <div class="col-auto">
          <div class="avatar avatar-xl position-relative">
            <img
              src="../assets/img/curved-images/logo-circle-rialpayment.png"
              alt="rialpayment_logo"
              class="shadow-sm w-100 border-radius-lg"
            />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">RialPayment</h5>
            <p class="mb-0 text-sm font-weight-bold">پرداخت ریالی</p>
          </div>
        </div>
        <div
          class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0"
        >
          <div class="nav-wrapper position-relative end-0">
            <ul
              dir="ltr"
              class="p-1 bg-transparent nav nav-pills nav-fill"
              role="tablist"
            ></ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
    <div class="mt-3 row">
      <div class="col-12 col-md-6 col-xl-6">
        <div class="card h-100">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-0">لطفا نوع قبض خود را انتخاب کنید</h6>
          </div>

          <div
            class="parent_billing d-flex flex-wrap justify-center"
            style="justify-content: center !important"
          >
            <item-billing />
          </div>
        </div>
      </div>
      <div class="mt-4 col-12 col-md-6 col-xl-6 mt-md-0">
        <bill-card />
      </div>
    </div>
  </div>
  <app-footer />
</template>

<script>
import BillCard from "./components/BillCard.vue";
import sophie from "@/assets/img/kal-visuals-square.jpg";
import marie from "@/assets/img/marie.jpg";
import ivana from "@/assets/img/ivana-square.jpg";
import peterson from "@/assets/img/team-4.jpg";
import nick from "@/assets/img/team-3.jpg";
import img1 from "@/assets/img/home-decor-1.jpg";
import img2 from "@/assets/img/home-decor-2.jpg";
import img3 from "@/assets/img/home-decor-3.jpg";
import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";
// import ProjectsCard from "./components/ProjectOverviewCard.vue";
import setNavPills from "@/assets/js/nav-pills.ts";
import setTooltip from "@/assets/js/tooltip.ts";
import AppFooter from "@/examples/Footer.vue";
import ItemBilling from "@/components/Billing/ItemBilling.vue";

export default {
  name: "profile-overview",
  data() {
    return {
      showMenu: false,
      sophie,
      marie,
      ivana,
      peterson,
      nick,
      img1,
      team1,
      team2,
      team3,
      team4,
      img2,
      img3,
    };
  },
  components: {
    BillCard,
    // ProjectsCard,
    AppFooter,
    ItemBilling,
  },

  mounted() {
    this.$store.state.isAbsolute = true;
    this.$store.state.isNavFixed = false;
    setNavPills();
    setTooltip();
    window.location.href = "#";
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .parent_billing {
    display: block !important;
  }
}
</style>
