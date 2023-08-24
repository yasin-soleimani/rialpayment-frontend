<template>
  <!-- <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>پرداخت کرایه ناکسی</h6>
    </div> -->
  <!-- <div class="card-body px-0 pt-0 pb-2"> -->
  <!-- <div class="table-responsive p-0"> -->
  <!-- <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="
                  text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
              >
                Author
              </th>
              <th
                class="
                  text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                  ps-2
                "
              >
                Function
              </th>
              <th
                class="
                  text-center text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
              >
                Status
              </th>
              <th
                class="
                  text-center text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
              >
                Employed
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar
                      :img="img1"
                      size="sm"
                      border-radius="lg"
                      class="me-3"
                      alt="user1"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">John Michael</h6>
                    <p class="text-xs text-secondary mb-0">
                      john@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Manager</p>
                <p class="text-xs text-secondary mb-0">Organization</p>
              </td>
              <td class="align-middle text-center text-sm">
                <vsud-badge color="info" variant="gradient" size="sm"
                  >Online</vsud-badge
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >23/04/18</span
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar
                      :img="img2"
                      class="me-3"
                      size="sm"
                      border-radius="lg"
                      alt="user2"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Alexa Liras</h6>
                    <p class="text-xs text-secondary mb-0">
                      alexa@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Programator</p>
                <p class="text-xs text-secondary mb-0">Developer</p>
              </td>
              <td class="align-middle text-center text-sm">
                <vsud-badge color="secondary" variant="gradient" size="sm"
                  >Offline</vsud-badge
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >11/01/19</span
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar
                      :img="img3"
                      size="sm"
                      border-radius="lg"
                      class="me-3"
                      alt="user3"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Laurent Perrier</h6>
                    <p class="text-xs text-secondary mb-0">
                      laurent@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Executive</p>
                <p class="text-xs text-secondary mb-0">Projects</p>
              </td>
              <td class="align-middle text-center text-sm">
                <vsud-badge color="info" variant="gradient" size="sm"
                  >Online</vsud-badge
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >19/09/17</span
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar
                      :img="img4"
                      class="me-3"
                      size="sm"
                      border-radius="lg"
                      alt="user4"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Michael Levi</h6>
                    <p class="text-xs text-secondary mb-0">
                      michael@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Programator</p>
                <p class="text-xs text-secondary mb-0">Developer</p>
              </td>
              <td class="align-middle text-center text-sm">
                <vsud-badge color="info" variant="gradient" size="sm"
                  >Online</vsud-badge
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >24/12/08</span
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar
                      :img="img5"
                      class="me-3"
                      size="sm"
                      border-radius="lg"
                      alt="user5"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Richard Gran</h6>
                    <p class="text-xs text-secondary mb-0">
                      richard@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Manager</p>
                <p class="text-xs text-secondary mb-0">Executive</p>
              </td>
              <td class="align-middle text-center text-sm">
                <vsud-badge color="secondary" variant="gradient" size="sm"
                  >Offline</vsud-badge
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >04/10/21</span
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar
                      :img="img6"
                      class="me-3"
                      size="sm"
                      border-radius="lg"
                      alt="user6"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Miriam Eric</h6>
                    <p class="text-xs text-secondary mb-0">
                      miriam@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Programtor</p>
                <p class="text-xs text-secondary mb-0">Developer</p>
              </td>
              <td class="align-middle text-center text-sm">
                <vsud-badge color="secondary" variant="gradient" size="sm"
                  >Offline</vsud-badge
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >14/09/20</span
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a
                >
              </td>
            </tr>
          </tbody>
        </table> -->
  <div class="row mb-5 mt-5">
    <div class="col-lg-7 mb-lg-0 mb-4">
      <div class="card">
        <div class="card-body p-3">
          <div class="row">
            <div class="col-lg-6">
              <div class="d-flex flex-column h-100">
                <p class="mb-1 pt-2 font-wight-bolder text-bold mb-3">
                  پرداخت کرایه تاکسی
                </p>
                <form role="form" class="loginForm pt-3">
                  <!-- <label class="text-sm my-2"
                    >لطفا کد پذیرنده را وارد کنید</label
                  > -->

                  <input
                    dir="rtl"
                    class="form-control mt-2"
                    type="text"
                    placeholder="کد پذیرنده"
                    maxlength="11"
                    v-model="mobile"
                  />

                  <div class="text-center">
                    <vsud-button
                      @click.prevent="submitLoginForm"
                      class="my-3"
                      variant="gradient"
                      color="info"
                      fullWidth
                      >ادامه
                    </vsud-button>
                    <vsud-button
                      @click.prevent="submitLoginForm"
                      class="my-2 btn btn-outline-info"
                      fullWidth
                      >اسکن بارکد راننده
                    </vsud-button>
                  </div>
                </form>

                <!-- <p class="mb-5">
                  امکان دریافت آنلاین پول از مشتریان شما. کسب و کار های کوچک
                  نیازمند نقل و انتقال سریع پول جهت تداوم حضور در بازار ...
                </p> -->
              </div>
            </div>

            <div class="col-lg-6 me-auto ms-0 text-right">
              <div class="border-radius-lg min-height-200">
                <div class="position-relative pt-2 pb-2">
                  <img
                    class="
                      max-width-500 max-height-250
                      w-100
                      position-relative
                      z-index-2
                    "
                    src="../../assets/img/curved-images/taxi-image-2.jpg"
                  />
                </div>
              </div>
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
        >
          <span class="mask bg-warning"></span>
          <div
            class="
              card-body
              position-relative
              z-index-1
              d-flex
              flex-column
              h-100
              p-3
            "
          >
            <h5 class="text-danger font-weight-bolder mb-4 pt-2">
              توجه داشته باشید
            </h5>
            <p class="text-danger h6" style="line-height: 35px">
              این سرویس در حال حاظر فقط در شهر تهران قابل استفاده است وبه زودی
              در تمام شهر های کشور در دسترس خواهد بود.
            </p>
            <a
              class="
                text-back text-sm
                font-weight-bold
                mb-0
                icon-move-right
                mt-auto
              "
              href="javascript:;"
            >
              منتظر ما باشید.
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import VsudButton from "@/components/VsudButton.vue";
// import VsudAvatar from "@/components/VsudAvatar.vue";
// import VsudBadge from "@/components/VsudBadge.vue";
// import img1 from "../../assets/img/team-2.jpg";
// import img2 from "../../assets/img/team-3.jpg";
// import img3 from "../../assets/img/team-4.jpg";
// import img4 from "../../assets/img/team-3.jpg";
// import img5 from "../../assets/img/team-2.jpg";
// import img6 from "../../assets/img/team-4.jpg";

export default {
  name: "authors-table",
  // data() {
  //   return {
  //     img1,
  //     img2,
  //     img3,
  //     img4,
  //     img5,
  //     img6,
  //   };
  // },
  components: {
    // VsudAvatar,
    // VsudBadge,
    VsudButton,
  },
};
</script>
