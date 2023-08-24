<template>
  <nav
    class="shadow-none navbar navbar-main navbar-expand-lg"
    v-bind="$attrs"
    id="navbarBlur"
    data-scroll="true"
  >
    <ul class="navbar-nav justify-content-end">
      <!-- <i class="cursor-pointer fa fa-cog"></i> -->
      <li class="nav-item d-xl-none ps-3 d-flex align-items-center mx-3">
        <div
          @click="sidebarDisable"
          class="sidenav-toggler-inner position-fixed"
          style="left: 30px; z-index: 99999; top: 30px"
        >
          <i class="sidenav-toggler-line"></i>
          <i class="sidenav-toggler-line"></i>
          <i class="sidenav-toggler-line"></i>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
import store from "@/store";

export default {
  name: "navbar",
  props: ["toggle"],
  data() {
    return {
      fixedKey: "",
    };
  },
  methods: {
    ...mapMutations(["navbarMinimize", "sidebarType", "navbarFixed"]),
    ...mapActions(["toggleSidebarColor"]),

    sidebarType(type) {
      this.toggleSidebarColor(type);
    },

    setNavbarFixed() {
      if (this.$route.name !== "Billing") {
        this.$store.state.isNavFixed = !this.$store.state.isNavFixed;
      }
    },

    sidebarDisable() {
      store.dispatch("app/toggleSidebarMobile");
      console.log("click button toggle sidebar");
    },
  },
  computed: {
    ifTransparent() {
      return this.$store.state.isTransparent;
    },

    currentRouteName() {
      return this.$route.name;
    },
  },
  beforeMount() {
    // this.$store.state.isTransparent = "bg-transparent";
    // Deactivate sidenav type buttons on resize and small screens
    window.addEventListener("resize", this.sidenavTypeOnResize);
    window.addEventListener("load", this.sidenavTypeOnResize);
  },

  created() {
    store.dispatch("app/navbarMinimize");
  },
  updated() {
    const navbar = document.getElementById("navbarBlur");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10 && this.$store.state.isNavFixed) {
        navbar.classList.add("blur");
        navbar.classList.add("position-sticky");
        navbar.classList.add("shadow-blur");
      }
    });
  },
};
</script>
