<template>
  <div>
    <div
      class="
        bg-active
        position-fixed
        border-0
        sidenav
        navbar-vertical navbar-expand-xs
      "
      id="sidenav-main"
      style="min-width: 100%"
    >
      <div class="mt-5">
        <hr class="mt-0 horizontal dark" />
        <item-sidebar-mobile :cardBg="custom_class" />
      </div>
    </div>
  </div>
</template>
<script>
import ItemSidebarMobile from "@/examples/Sidenav/ItemSidebarMobile.vue";
import logo from "@/assets/img/curved-images/logo-circle-rialpayment.png";

export default {
  name: "SidebarMobile",

  data() {
    return {
      logo,
    };
  },

  props: ["custom_class"],
  components: {
    ItemSidebarMobile,
  },
};
</script>

<style lang="scss" scoped>
.style-image-index {
  height: 60px;
  width: 60px;
}
</style>
