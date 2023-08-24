<template>
  <alert-app v-if="showAlert" class="mx-auto" />
  <!-- <div v-if="sidebarType"> -->
  <sidenav
    v-if="showSidebar"
    :hidden="!sidebarType"
    :custom_class="this.$store.state.mcolor"
    :class="sideFixed"
  />
  <!-- </div> -->
  <div :hidden="sidebarType">
    <sidebar-mobile
      v-if="sidebarMobile"
      :custom_class="this.$store.state.mcolor"
      :class="sideFixed"
    />
  </div>

  <main
    class="fixed-end main-content position-relative max-height-vh-100 h-100"
    :style="this.$store.state.isRTL ? 'overflow-x: hidden' : ''"
  >
    <navbar
      v-if="showNavbar"
      :class="[navClasses]"
      :textWhite="this.$store.state.isAbsolute ? 'text-white opacity-8' : ''"
      :minNav="navbarMinimize"
    />
    <router-view class="fixed-end" />
    <app-footer class="fixed-end" v-show="this.$store.state.showFooter" />
  </main>
</template>
<script>
import Sidenav from "./examples/Sidenav";
import SidebarMobile from "@/examples/Sidenav/SidebarMobile.vue";
import Navbar from "@/examples/Navbars/Navbar.vue";
import AppFooter from "@/examples/Footer.vue";
import { mapMutations } from "vuex";
import store from "./store";
import AlertApp from "@/components/VsudAlert.vue";
export default {
  name: "App",

  data() {
    return {
      sidebarType: window.screen.width > 1200 ? true : false,
      test: false,
    };
  },
  components: {
    Sidenav,
    Navbar,
    AppFooter,
    AlertApp,
    SidebarMobile,
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
  computed: {
    navClasses() {
      return {
        "position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky":
          store.state.app.isNavFixed,
        "position-absolute px-4 mx-0 w-100 z-index-2":
          store.state.app.isAbsolute,
        "px-0 mx-4 mt-4": !this.$store.state.isAbsolute,
      };
    },

    showSidebar() {
      return store.state.app.sidebar;
    },

    sidebarMobile() {
      return store.state.app.sidebarMobile;
    },

    sideFixed() {
      return store.state.app.isTransparent;
    },

    showNavbar() {
      return store.state.app.navbar;
    },

    showAlert() {
      return store.state.auth.showAlert;
    },
  },

  beforeMount() {
    this.$store.state.isRTL = true;
    document.querySelector("html").setAttribute("lang", "ar");
    document.querySelector("html").setAttribute("dir", "rtl");
    document.querySelector("#app").classList.add("rtl");
  },
  beforeUnmount() {
    this.$store.state.isRTL = true;
    document.querySelector("html").removeAttribute("lang");
    document.querySelector("html").removeAttribute("dir");
  },

  created() {
    store.dispatch("app/toggleConfigurator");
  },
};
</script>
