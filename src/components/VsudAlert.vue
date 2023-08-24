<template>
  <div
    class="mt-3 alert text-white font-weight-bold alert_app_style col-md-3"
    role="alert"
    :class="getClasses(color, dismissible)"
  >
    <span class="alert-icon">
      <i :class="getIcon(icon)" />
    </span>
    <span class="alert-text">
      &nbsp;
      <slot />
      {{ responseText }}
    </span>
    <button
      v-if="dismissible"
      type="button"
      class="btn-close d-flex justify-content-center align-items-center"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true" class="text-lg font-weight-bold">&times;</span>
    </button>
  </div>
</template>

<script lang="ts">
import store from "@/store";
export default {
  name: "vsud-alert",
  props: {
    color: {
      type: String,
      default: "info",
    },
    icon: String,
    dismissible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getClasses: (color: string, dismissible: string) => {
      let colorValue, dismissibleValue;

      colorValue = color ? `alert-${color}` : null;

      dismissibleValue = dismissible ? "alert-dismissible fade show" : null;

      return `${colorValue} ${dismissibleValue}`;
    },
    getIcon: (icon: string) => (icon ? icon : null),
  },

  computed: {
    responseText(): string {
      return store.state.auth.responseText;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  transition: 1s;
}
.alert_app_style {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9999;
}
</style>
