<template>
  <div class="py-4 mt-5 container-fluid">
    <div class="row">
      <div class="col-lg-7 mb-lg-0 mb-4">
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div
                class="parent_internet_package d-flex col-lg-12 mb-lg-0 mb-4"
              >
                <internet-package-item />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="card h-100 p-3">
          <div
            class="
              overflow-hidden
              position-relative
              border-radius-lg
              bg-cover
              h-100
            "
            style="
              background-image: url('https://demos.creative-tim.com/soft-ui-dashboard/assets/img/ivancik.jpg');
            "
          >
            <span class="mask bg-gradient-dark"></span>
            <div class="card-body position-relative z-index-1 p-3 h-100">
              <div class="d-flex flex-column h-100">
                <h5 class="text-white font-weight-bolder mb-4 pt-2">
                  درگاه پرداخت اینترنتی Rial Payment
                </h5>
                <p class="text-white mb-5">
                  مکان پرداخت آنلاین توسط مشتریان شما. درگاه پرداخت Rial Payment
                  امکان دریافت آنلاین وجه از مشتریان را در وبسایت های ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 row"></div>
    <div class="mt-4 row">
      <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
        <div class="card h-100">
          <div class="card-header pb-0">
            <div class="row mb-3">
              <div>
                <div>
                  <h5 class="mx-3 font-weight-light-bold">
                    نوع بسته خود را انتخاب کنید
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body p-0 pb-2">
            <div class="table-responsive">
              <table
                class="
                  parent_internet_package_type
                  table
                  d-flex
                  justify-content-center
                  flex-wrap
                  align-items-center
                  mb-0
                "
              >
                <internet-package-mci v-if="showInternetTypeMci" />
                <internet-package-mtn v-if="showInternetTypeMtn" />
                <internet-package-shaparak v-if="showInternetTypeShaparak" />
                <internet-package-shatel v-if="showInternetTypeShatel" />
                <internet-package-rightel v-if="showInternetTypeRightel" />

                <!-- // create item internet package operator -->

                <!-- the end design internet package list -->
              </table>
              <hr class="horizontal dark my-sm-4" />

              <div class="col-lg-10 mx-auto">
                <form role="form" class="loginForm mx-3">
                  <label class="mt-3 mx-2 text-sm font-weight-light"
                    >شماره موبایل خود را وارد کنید</label
                  >
                  <input
                    dir="rtl"
                    class="form-control mt-2"
                    type="text"
                    maxlength="11"
                    placeholder="شماره موبایل"
                  />
                  <div class="text-center">
                    <vsud-button
                      @click.prevent="submitLoginForm"
                      class="my-4 mb-2"
                      variant="gradient"
                      color="info"
                      fullWidth
                      >خرید بسته
                    </vsud-button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card h-100">
          <div class="card-header pb-0">
            <h6>خرید بسته اینترنت در پنج قدم بسیار ساده</h6>
          </div>
          <div class="card-body p-3">
            <div class="timeline timeline-one-side">
              <div class="timeline-block mb-3">
                <span class="timeline-step">
                  <i class="ni ni-bell-55 text-info text-gradient"></i>
                </span>
                <div class="timeline-content">
                  <h6 class="text-dark text-sm font-weight-bold mb-0">
                    انتخاب اپراتور مورد نظر
                  </h6>
                  <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                    قدم اول
                  </p>
                </div>
              </div>
              <div class="timeline-block mb-3">
                <span class="timeline-step">
                  <i class="ni ni-html5 text-danger text-gradient"></i>
                </span>
                <div class="timeline-content">
                  <h6 class="text-dark text-sm font-weight-bold mb-0">
                    انتخاب نوع بسته اینترنت
                  </h6>
                  <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                    قدم دوم
                  </p>
                </div>
              </div>
              <div class="timeline-block mb-3">
                <span class="timeline-step">
                  <i class="ni ni-cart text-info text-gradient"></i>
                </span>
                <div class="timeline-content">
                  <h6 class="text-dark text-sm font-weight-bold mb-0">
                    وارد کردن شماره موبایل
                  </h6>
                  <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                    قدم سوم
                  </p>
                </div>
              </div>
              <div class="timeline-block mb-3">
                <span class="timeline-step">
                  <i class="ni ni-credit-card text-warning text-gradient"></i>
                </span>
                <div class="timeline-content">
                  <h6 class="text-dark text-sm font-weight-bold mb-0">
                    انتخاب مبلغ بسته اینترنت
                  </h6>
                  <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                    قدم چهارم
                  </p>
                </div>
              </div>
              <div class="timeline-block mb-3">
                <span class="timeline-step">
                  <i class="ni ni-key-25 text-primary text-gradient"></i>
                </span>
                <div class="timeline-content">
                  <h6 class="text-dark text-sm font-weight-bold mb-0">
                    کلیک روی خرید بسته
                  </h6>
                  <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                    قدم پنجم
                  </p>
                </div>
              </div>
              <div class="timeline-block">
                <span class="timeline-step">
                  <i class="ni ni-money-coins text-dark text-gradient"></i>
                </span>
                <div class="timeline-content">
                  <h6 class="text-dark text-sm font-weight-bold mb-0">
                    طلب جديد #9583120
                  </h6>
                  <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                    پایان
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-footer />
</template>

<script lang="ts">
import AppFooter from "@/examples/Footer.vue";
import InternetPackageItem from "@/components/internetPackage/InternetPackageItem.vue";
import InternetPackageRightel from "@/components/internetPackage/InternetPackageRightel.vue";
import VsudButton from "@/components/VsudButton.vue";
import InternetPackageMtn from "@/components/internetPackage/InternetPackageMtn.vue";
import InternetPackageShaparak from "@/components/internetPackage/InternetPackageShaparak.vue";
import InternetPackageShatel from "@/components/internetPackage/InternetPackageShatel.vue";
import InternetPackageMci from "@/components/internetPackage/InternetPackageTypeMci.vue";
import store from "@/store";
export default {
  name: "Internet",

  data() {
    return {
      iconBackground: "bg-gradient-info",
    };
  },

  computed: {
    internetPackageName(): string {
      return store.state.panel.internetPackageType.name;
    },

    showInternetTypeMci(): boolean {
      return store.state.panel.internetPackageType.showInternetTypeMci;
    },

    showInternetTypeMtn(): boolean {
      return store.state.panel.internetPackageType.showInternetTypeMtn;
    },

    showInternetTypeRightel(): boolean {
      return store.state.panel.internetPackageType.showInternetTypeRightel;
    },

    showInternetTypeShaparak(): boolean {
      return store.state.panel.internetPackageType.showInternetTypeshaparak;
    },

    showInternetTypeShatel(): boolean {
      return store.state.panel.internetPackageType.showInternetTypeShatel;
    },
  },
  components: {
    AppFooter,
    InternetPackageItem,
    InternetPackageRightel,
    VsudButton,
    InternetPackageMtn,
    InternetPackageShaparak,
    InternetPackageShatel,
    InternetPackageMci,
  },

  created() {
    setTimeout(() => {
      // store.dispatch("panel/getPackageCategories");
      // store.dispatch("panel/getPackages");
    }, 5000);

    window.location.href = "#";
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .parent_internet_package {
    display: block !important;
  }
  .parent_internet_package_type {
    display: block !important;
  }
}
</style>
