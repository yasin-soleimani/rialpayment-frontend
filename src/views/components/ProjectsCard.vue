<template>
  <div class="card h-100">
    <div class="card-header pb-0">
      <div class="row">
        <div>
          <h6>شش تراکنش آخر شما</h6>
        </div>
        <div class="my-auto text-end"></div>
      </div>
    </div>
    <div class="card-body px-0 pb-2">
      <div class="table-responsive">
        <table class="table align-items-center mb-0">
          <!-- <tbody>
            <div>
              <p
                class="text-center h3 font-weight-light"
                style="line-height: 40px"
              >
                شما تا کنون هیچ تراکنشی انجام نداده اید
              </p>
            </div>
          </tbody> -->
          <thead>
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
                  text-right text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
              >
                <p class="h6" style="margin-right: -33px">وضعیت</p>
              </th>
              <th
                class="
                  text-center text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
              >
                <p class="h6">مبلغ</p>
              </th>
              <th
                class="
                  text-center text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  opacity-7
                "
              >
                <p class="h6">مشخصات</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar :img="img1" size="sm" class="me-3" alt="xd" />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">
                      تراکنش تست برای باشگاه ریال پیمنت
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="text-xs font-weight-bold"
                  ><i class="fa fa-check"></i
                ></span>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="text-xs font-weight-bold">$14,000</span>
              </td>
              <td class="align-middle">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="text-xs font-weight-bold mx-2"
                    >خرید از پایانه فروش (ATM)</span
                  >
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar
                      :img="img6"
                      size="sm"
                      class="me-3"
                      alt="atlassian"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">
                      تراکنش تست برای باشگاه ریال پیمنت
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="text-xs font-weight-bold"
                  ><i class="fa fa-check"></i
                ></span>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="text-xs font-weight-bold">$3,000</span>
              </td>
              <td class="align-middle">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="text-xs font-weight-bold mx-2"
                    >خرید از پایانه فروش (ATM)</span
                  >
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar
                      :img="img9"
                      size="sm"
                      class="me-3"
                      alt="team7"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">
                      تراکنش تست برای باشگاه ریال پیمنت
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="text-xs font-weight-bold"
                  ><i class="fa fa-check"></i
                ></span>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="text-xs font-weight-bold">Not set</span>
              </td>
              <td class="align-middle">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="text-xs font-weight-bold mx-2"
                    >خرید از پایانه فروش (ATM)</span
                  >
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar
                      :img="img12"
                      class="me-3"
                      size="sm"
                      alt="spotify"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">
                      تراکنش تست برای باشگاه ریال پیمنت
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="text-xs font-weight-bold"
                  ><i class="fa fa-check"></i
                ></span>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="text-xs font-weight-bold">$20,500</span>
              </td>
              <td class="align-middle">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="text-xs font-weight-bold mx-2"
                    >خرید از پایانه فروش (ATM)</span
                  >
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar
                      :img="img17"
                      rounded-circle
                      class="me-3"
                      size="sm"
                      alt="jira"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">
                      تراکنش تست برای باشگاه ریال پیمنت
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="text-xs font-weight-bold"
                  ><i class="fa fa-check"></i
                ></span>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="text-xs font-weight-bold">$3,000</span>
              </td>
              <td class="align-middle">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="text-xs font-weight-bold mx-2"
                    >خرید از پایانه فروش (ATM)</span
                  >
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar
                      :img="img19"
                      class="me-3"
                      size="sm"
                      alt="invision"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">
                      تراکنش تست برای باشگاه ریال پیمنت
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="text-xs font-weight-bold"
                  ><i class="fa fa-check"></i
                ></span>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="text-xs font-weight-bold">$2,000</span>
              </td>
              <td class="align-middle">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="text-xs font-weight-bold mx-2"
                    >خرید از پایانه فروش (ATM)</span
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import setTooltip from "@/assets/js/tooltip.ts";
import img1 from "../../assets/img/small-logos/logo-xd.svg";
import img2 from "../../assets/img/team-1.jpg";
import img3 from "@/assets/img/team-2.jpg";
import img4 from "../../assets/img/team-3.jpg";
import img5 from "../../assets/img/team-4.jpg";
import img6 from "../../assets/img/small-logos/logo-atlassian.svg";
import img7 from "../../assets/img/team-2.jpg";
import img8 from "../../assets/img/team-4.jpg";
import img9 from "../../assets/img/small-logos/logo-slack.svg";
import img10 from "../../assets/img/team-3.jpg";
import img11 from "../../assets/img/team-1.jpg";
import img12 from "../../assets/img/small-logos/logo-spotify.svg";
import img13 from "../../assets/img/team-4.jpg";
import img14 from "../../assets/img/team-3.jpg";
import img15 from "../../assets/img/team-4.jpg";
import img16 from "../../assets/img/team-1.jpg";
import img17 from "../../assets/img/small-logos/logo-jira.svg";
import img18 from "../../assets/img/team-4.jpg";
import img19 from "../../assets/img/small-logos/logo-invision.svg";
import img20 from "../../assets/img/team-1.jpg";
import img21 from "../../assets/img/team-4.jpg";

export default {
  name: "projects-card",
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
      img17,
      img18,
      img19,
      img20,
      img21,
    };
  },

  mounted() {
    setTooltip();
  },
};
</script>
