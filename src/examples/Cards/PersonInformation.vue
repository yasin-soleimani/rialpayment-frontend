<template>
  <div class="col-md-12 card h-100 p-3">
    <div class="overflow-hidden position-relative border-radius-lg h-100">
      <div
        class="
          container
          px-0
          mx-0
          d-flex
          justify-content-right
          align-items-center
        "
        style="padding-right: 0px !important; padding-left: 0px !important"
      >
        <card-payment />
      </div>
    </div>
  </div>
</template>

<script>
import CardPayment from "@/examples/Cards/CardPayment.vue";
export default {
  name: "PersonInformation",

  components: {
    CardPayment,
  },
};
</script>
