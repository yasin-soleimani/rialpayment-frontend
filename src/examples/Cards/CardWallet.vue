<template>
  <div class="h-100 col-md-12">
    <div class="card-header pb-0">
      <div class="col-sm-12 parent-card-wallet d-flex justify-content-between">
        <div class="col-sm-6">
          <h4 class="font-weight-bold">مشخصات کیف پول</h4>
          <h5 class="mt-4">اعتبار کیف پول:</h5>
          <span class="h3 color-active mt-3">10,000,000 ریال</span>
        </div>
        <div class="col-sm-6 text-center py-3 w-30 rounded mt-5">
          <img
            class="col-sm-12 col-md-12 col-xs-6"
            src="../../assets/img/curved-images/wallet-bg-active.png"
            alt="wallet"
            width="170"
          />
        </div>
      </div>
    </div>
    <div class="card-body px-0 pb-2">
      <div>
        <button
          @click="goToPageWalletCharge"
          class="btn bg-active text-white mx-1"
        >
          شارژ کیف پول
        </button>

        <button @click="goToTransactions" class="btn btn-outline-primary mx-1">
          نمایش همه تراکنش ها
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "projects-card",
  data() {
    "CardWallet";
  },

  methods: {
    goToTransactions() {
      router.push({ name: "Transactions" });
    },

    goToPageWalletCharge() {
      router.push({ name: "WalletCharge" });
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 500px) {
  .parent-card-wallet {
    display: block !important;
  }
}
</style>
