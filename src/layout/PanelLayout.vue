<template>
  <div>
    <h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
      repellat.
    </h2>
    <slot />
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "PanelLayoute",

  created() {
    router.push({ name: "LoginForm" });
  },
};
</script>
