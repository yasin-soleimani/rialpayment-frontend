<template>
  <div class="w-50 bg-info" dir="rtl">
    <a class="px-3 py-2 text-dark" @click="toggle">
      <i class="py-2 fa fa-cog">asxsa </i>
    </a>
    <div class="shadow-lg card blur">
      <hr class="my-1 horizontal dark" />
      <div class="pt-0 card-body pt-sm-3">
        <!-- Sidebar Backgrounds -->
        <div>
          <h6 class="mb-0">Sidebar Colors</h6>
        </div>
        <a href="#" class="switch-trigger background-color">
          <div class="my-2 w-50 badge-colors">
            <span
              class="badge mx-2 rounded-circle filter bg-gradient-primary"
              data-color="primary"
              @click="sidebarColor('primary')"
              >1</span
            >
            <span
              class="badge mx-2 rounded-circle filter bg-gradient-dark"
              data-color="dark"
              @click="sidebarColor('dark')"
              >2</span
            >
            <span
              class="badge mx-2 rounded-circle filter bg-gradient-info"
              data-color="info"
              @click="sidebarColor('info')"
              >3</span
            >
            <span
              class="badge mx-2 rounded-circle filter bg-gradient-info"
              data-color="info"
              @click="sidebarColor('info')"
              >4</span
            >
            <span
              class="badge mx-2 rounded-circle filter bg-gradient-warning"
              data-color="warning"
              @click="sidebarColor('warning')"
              >5</span
            >
            <span
              class="badge mx-2 rounded-circle filter bg-gradient-danger"
              data-color="danger"
              @click="sidebarColor('danger')"
              >6</span
            >
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { mapMutations, mapActions } from "vuex";
export default {
  name: "configurator",
  props: ["toggle"],
  data() {
    return {
      fixedKey: "",
    };
  },
  methods: {
    ...mapMutations(["navbarMinimize", "sidebarType", "navbarFixed"]),
    ...mapActions(["toggleSidebarColor"]),

    sidebarColor(color = "info") {
      document.querySelector("#sidenav-main").setAttribute("data-color", color);
      this.$store.state.mcolor = `card-background-mask-${color}`;
    },

    sidebarType(type) {
      this.toggleSidebarColor(type);
    },

    setNavbarFixed() {
      if (this.$route.name !== "Billing") {
        this.$store.state.isNavFixed = !this.$store.state.isNavFixed;
      }
    },

    sidenavTypeOnResize() {
      let transparent = document.querySelector("#btn-transparent");
      let white = document.querySelector("#btn-white");
      if (window.innerWidth < 1200) {
        transparent.classList.add("disabled");
        white.classList.add("disabled");
      } else {
        transparent.classList.remove("disabled");
        white.classList.remove("disabled");
      }
    },
  },
  computed: {
    ifTransparent() {
      return this.$store.state.isTransparent;
    },
    sidenavResponsive() {
      return this.sidenavTypeOnResize;
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
};
</script>
