<template>
  <div class="card h-100 mt-5 mx-3">
    <div class="my-3 mx-3">
      <h5>شارژ کیف پول</h5>
      <hr />
      <h5 class="mt-3 font-weight-light">
        موجودی کیف پول شما: ۱۰,۰۰۰,۰۰۰ ریال
      </h5>
    </div>
    <div class="d-flex justify-content-center">
      <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_mb6bb0nw.json"
        background="transparent"
        speed="1"
        style="width: 500px; height: 500px"
        autoplay
      ></lottie-player>
    </div>
    <div>
      <div class="d-flex justify-content-center">
        <h4 class="font-weight-light mx-3 lh-lg">
          حداقل مبلغ <span class="mx-1 color-active"> 20,000 </span> و حداکثر
          مبلغ <span class="mx-1 color-active"> 500,000,000 </span> ریال می باشد
        </h4>
      </div>
      <div class="col-md-5 my-3 mx-auto">
        <form role="form" class="loginForm mx-3">
          <label class="text-sm font-weight-light">
            مبلغ خود را وازد کنید</label
          >

          <input
            dir="rtl"
            class="form-control"
            type="text"
            placeholder="مبلغ"
          />

          <div class="text-center">
            <vsud-button
              @click.prevent="paymentCharge"
              class="col-md-3 my-4 mb-2"
              variant="gradient"
              color="active"
              ><span v-if="!loading">خرید شارژ</span>
              <span
                v-if="loading"
                class="spinner-border spinner-border-sm"
              ></span>
            </vsud-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VsudButton from "@/components/VsudButton.vue";

export default {
  name: "WalletCharge",

  components: {
    VsudButton,
  },
};
</script>
