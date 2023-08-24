<template>
  <div
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li @click="sidebarOffMobile" class="nav-item">
        <sidenav-collapse navText="صفحه نخست" :to="{ name: 'Dashboard' }">
          <template v-slot:icon>
            <icon name="dashboard" />
          </template>
        </sidenav-collapse>
      </li>

      <li @click="sidebarOffMobile" class="nav-item">
        <sidenav-collapse navText="خرید شارژ" :to="{ name: 'Charge' }">
          <template v-slot:icon>
            <icon name="charge" />
          </template>
        </sidenav-collapse>
      </li>

      <li @click="sidebarOffMobile" class="nav-item">
        <sidenav-collapse
          navText="خرید بسته اینترنت"
          :to="{ name: 'Internet' }"
        >
          <template v-slot:icon>
            <icon name="rtl-page" />
          </template>
        </sidenav-collapse>
      </li>

      <li @click="sidebarOffMobile" class="nav-item">
        <sidenav-collapse navText="پرداخت کرایه تاکسی" :to="{ name: 'Taxi' }">
          <template v-slot:icon>
            <icon name="Taxi" />
          </template>
        </sidenav-collapse>
      </li>

      <li @click="sidebarOffMobile" class="nav-item">
        <sidenav-collapse navText="پرداخت قبض" :to="{ name: 'Billing' }">
          <template v-slot:icon>
            <icon name="customer-support" />
          </template>
        </sidenav-collapse>
      </li>

      <li @click="sidebarOffMobile" class="nav-item">
        <sidenav-collapse
          @click="signout"
          navText="خروج از حساب"
          :to="{ name: 'Sign In' }"
        >
          <template v-slot:icon>
            <icon name="sign-up" />
          </template>
        </sidenav-collapse>
      </li>
    </ul>
  </div>
</template>
<script>
import Icon from "@/components/Icon.vue";
import SidenavCollapse from "./SidenavCollapse.vue";
import store from "@/store";

export default {
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  components: {
    Icon,
    SidenavCollapse,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },

    sidebarOffMobile() {
      if (window.screen.width < 1200) {
        store.dispatch("app/toggleSidebarMobile");
        //TODO:
      }
    },

    signout() {
      localStorage.removeItem("user");
    },
  },
};
</script>
