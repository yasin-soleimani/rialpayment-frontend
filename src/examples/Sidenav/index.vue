<template>
  <div
    class="
      mt-3
      fixed-end
      overflow-auto
      border-0
      sidenav
      navbar navbar-vertical navbar-expand-xs
      bg-transparent
      shadow-none
    "
    :class="this.$store.state.isRTL ? 'me-3 rotate-caret' : 'ms-3'"
    id="sidenav-main"
  >
    <div class="sidenav-header">
      <div class="m-0 navbar-brand p-0">
        <div>
          <img
            src="../../assets/img/curved-images/logo-circle-rialpayment.png"
            class="rounded-circle style-image-index"
          />
          <span class="font-weight-bold mx-2"
            >ریال پیمنت | <span>RialPayment</span></span
          >
        </div>
      </div>
    </div>
    <aside
      class="
        bg-active
        mt-7
        fixed-end
        overflow-auto
        border-0
        sidenav
        navbar navbar-vertical navbar-expand-xs
        rounded-top-left-1
      "
      :class="this.$store.state.isRTL ? 'me-3 rotate-caret' : 'ms-3'"
      id="sidenav-main"
    >
      <div class="mt-5">
        <hr class="mt-0 horizontal dark" />
        <sidenav-list :cardBg="custom_class" />
      </div>
    </aside>
  </div>
</template>
<script>
import SidenavList from "./SidenavList.vue";
import logo from "@/assets/img/curved-images/logo-circle-rialpayment.png";

export default {
  name: "index",
  components: {
    SidenavList,
  },
  data() {
    return {
      logo,
    };
  },
  props: ["custom_class"],
};
</script>

<style lang="scss" scoped>
.style-image-index {
  height: 60px;
  width: 60px;
}
</style>
