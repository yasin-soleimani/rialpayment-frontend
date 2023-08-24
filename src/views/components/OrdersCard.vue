<template>
  <div class="card h-100">
    <div class="d-flex justify-content-center">
      <lottie-player
        src="https://assets5.lottiefiles.com/packages/lf20_jlqxykab.json"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px"
        loop
        autoplay
      ></lottie-player>
    </div>
    <div class="card-header pb-0">
      <h6>{{ title }}</h6>
    </div>
    <div class="card-body p-3">
      <div class="timeline timeline-one-side">
        <div class="timeline-block mb-3">
          <span class="timeline-step">
            <i class="ni ni-bell-55 text-info text-gradient"></i>
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">{{ order }}</h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
              {{ date }}
            </p>
          </div>
        </div>
        <div class="timeline-block mb-3">
          <span class="timeline-step">
            <i class="ni ni-html5 text-danger text-gradient"></i>
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">
              {{ newOrder }}
            </h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
              {{ orderDate }}
            </p>
          </div>
        </div>
        <div class="timeline-block mb-3">
          <span class="timeline-step">
            <i class="ni ni-cart text-info text-gradient"></i>
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">
              {{ payment }}
            </h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
              {{ paymentDate }}
            </p>
          </div>
        </div>
        <div class="timeline-block mb-3">
          <span class="timeline-step">
            <i class="ni ni-credit-card text-warning text-gradient"></i>
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">
              {{ newCard }}
            </h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
              {{ newCardDate }}
            </p>
          </div>
        </div>
        <div class="timeline-block mb-3">
          <span class="timeline-step">
            <i class="ni ni-key-25 text-primary text-gradient"></i>
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">
              {{ unlockPackages }}
            </h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
              {{ unlockPackagesDate }}
            </p>
          </div>
        </div>
        <div class="timeline-block" v-if="newOrder2">
          <span class="timeline-step">
            <i class="ni ni-money-coins text-dark text-gradient"></i>
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">
              {{ newOrder2 }}
            </h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
              {{ newOrder2Date }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orders-card",
  props: {
    title: {
      type: String,
      default: "خرید شارژ تنها در پنج قدم بسیار ساده",
    },
    text: {
      type: String,
      default: "this month",
    },
    order: {
      type: String,
      default: "انتخاب اپراتور مد نظر خود",
    },
    date: {
      type: String,
      default: "قدم اول",
    },
    newOrder: {
      type: String,
      default: "انتخاب نوع شارژ خود",
    },
    orderDate: {
      type: String,
      default: "قدم دوم",
    },
    payment: {
      type: String,
      default: "انتخاب مبلغ شارژ",
    },
    paymentDate: {
      type: String,
      default: "قدم سوم",
    },
    newCard: {
      type: String,
      default: "وارد کردن شماره موبایل",
    },
    newCardDate: {
      type: String,
      default: "قدم چهارم",
    },
    unlockPackages: {
      type: String,
      default: "کلیک روی دکمه خرید شارژ",
    },
    unlockPackagesDate: {
      type: String,
      default: "قدم پنجم",
    },
    newOrder2: String,
    newOrder2Date: String,
  },
};
</script>
