<template>
  <transition-group appear @before-enter="beforeEnter" @enter="enter">
    <button
      @click="selectedInternetTypeMtn(item)"
      v-for="item in internetPackageList"
      :key="item.id"
      class="
        align-items-center
        item_internet_package
        card
        w-30
        text-center
        justify-content-center
        col-md-2
        mx-2
        my-2
      "
      :class="{ activeCard: item ? item.active : false }"
    >
      <div class="card-body">
        <!-- <h5 class="card-title">Special title treatment</h5> -->
        <div>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </button>
  </transition-group>
</template>

<script lang="ts">
import { SelectInternetTypeMtn } from "@/interface/internet/selectInternetTypeMtn";
import { defineComponent } from "vue";
import gsap from "gsap";
export default defineComponent({
  name: "InternetPackageMtn",

  setup() {
    const beforeEnter = (el: any) => {
      (el.style.opacity = 0), (el.style.transform = "translateY(-80px)");
    };

    const enter = (el: any) => {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        y: 0,
      });
    };

    return { beforeEnter, enter };
  },

  data(): any {
    return {
      internetPackageList: [
        {
          text: "اعتباری",
          id: 1,
          active: false,
        },
        {
          text: "داعمی",
          id: 2,
          active: false,
        },
        {
          text: "اینترنت ثابت اعتباری",
          id: 3,
          active: false,
        },
        {
          text: "اینترنت ثابت داعمی",
          id: 4,
          active: false,
        },
        {
          text: "صوتی اعتباری",
          id: 5,
          active: false,
        },
        {
          text: "صوتی داعمی",
          id: 6,
          active: false,
        },
      ],
    };
  },

  methods: {
    selectedInternetTypeMtn(item: SelectInternetTypeMtn): void {
      this.setTypeOperatorActive(item);
    },
    setTypeOperatorActive(item: SelectInternetTypeMtn): void {
      this.setAllTypeOperatorActive();
      const index = this.internetPackageList.findIndex(
        (el: SelectInternetTypeMtn) => el.id === item.id
      );
      if (index > -1) {
        this.internetPackageList[index].active = true;
      }
    },

    setAllTypeOperatorActive(): void {
      for (let i = 0; i < this.internetPackageList.length; i++) {
        this.internetPackageList[i].active = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.activeCard {
  background: #162a68;
  color: white;
  box-shadow: 8px 8px 8px #cfcfcf;
}

@media only screen and (max-width: 600px) {
  .item_internet_package {
    width: 90% !important;
    margin: auto !important;
    margin-top: 10px !important;
  }
}
</style>
