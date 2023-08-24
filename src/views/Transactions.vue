<template>
  <div>
    <div class="card mt-5 mx-3">
      <div class="card-header pb-0">
        <h6>همه تراکنش های شما</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div
          class="table-responsive overflow-auto p-0"
          style="min-height: 70vh; max-height: 70vh"
        >
          <table class="table align-items-center justify-content-center mb-0">
            <thead>
              <!-- TODO: set fixed navbar transactions table -->
              <tr>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                  "
                >
                  <p class="h6">توضیحات</p>
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                    ps-2
                  "
                >
                  <p class="h6">مبلغ</p>
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                    ps-2
                  "
                >
                  <p class="h6">وضعیت</p>
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    text-center
                    opacity-7
                    ps-2
                  "
                >
                  <p class="h6">مشخصات</p>
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    text-center
                    opacity-7
                    ps-2
                  "
                >
                  <p class="h6">تاریخ تراکنش</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in transactions" :key="item.transaction">
                <td>
                  <div class="d-flex px-2">
                    <div>
                      <img
                        src="../assets/img/curved-images/logo-circle-rialpayment.png"
                        class="avatar avatar-sm rounded-circle me-2"
                        alt="spotify"
                      />
                    </div>
                    <div class="my-auto">
                      <h6 class="mb-0 text-sm">{{ item.fullname }}</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-sm text-info font-weight-bold mb-0">
                    {{ item.amount }}
                  </p>
                </td>
                <td>
                  <span class="text-xs text-danger font-weight-bold">{{
                    item.position
                  }}</span>
                </td>
                <td class="align-middle text-center">
                  <div class="d-flex align-items-center justify-content-center">
                    <span class="me-2 text-sm font-weight-bold">{{
                      item.information
                    }}</span>
                  </div>
                </td>
                <td class="align-middle">
                  <div class="d-flex align-items-center justify-content-center">
                    <span class="me-2 text-sm font-weight-bold">{{
                      item.date
                    }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <app-footer />
      </div>
    </div>
  </div>
</template>

<script>
import AppFooter from "@/examples/Footer.vue";

export default {
  name: "Transactions",

  data() {
    return {
      transactions: [
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
        {
          fullname: "one is one",
          amount: "20,000",
          position: "payment",
          information: "it is transaction",
          date: "1402/8/20",
        },
      ],
    };
  },
  components: {
    AppFooter,
  },
};
</script>
