<template>
  <section class="review" id="review">
    <swiper
      :modules="modules"
      :slides-per-view="display"
      :space-between="50"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
            :autoplay="true"

      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="slide in swipeArray" :key="slide.name" class="slide">
        <i class="fa fa-quote-right"></i>
        <div class="user">
          <div class="user-info">
            <h3>{{ slide.name }}</h3>
            <div class="stars">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-alt"></i>
            </div>
          </div>
          <p>{{ slide.post }}</p>
          <img :src="slide.img" alt="" />
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/scss";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { ref } from "@vue/reactivity";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {};
    let slidelength = ref("");

    const onSlideChange = () => {};

    const swipeArray = ref([
      {
        name: "CEO_EatRightFood",
        img: "../assets/img1",
        post: " They are interested in the customer's well-being",
      },
            {
        name: "David",
        img: "../assets/img1",
        post: "lorem ipsum donor fosei tipai",
      },
      {
        name: "Marv",
        img: "../assets/img1",
        post: " in the customer's well-being",
      },
      {
        name: "Jeyi",
        img: "../assets/img1",
        post: "Super awesome!!",
      },
      {
        name: "CEO_EatRightFood",
        img: "../assets/img1",
        post: "Whatever you think.",
      },
    ]);

    return {
      onSwiper,
      onSlideChange,
      swipeArray,
      slidelength,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
  props: ["display"],
  mounted() {
    this.onResize;
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>
<style scoped>
#review {
  max-width: 100%;

  margin: 1rem 0 2rem 0;
  padding: 0 5%;
}

.review .slide {
  padding: 2rem;
  box-shadow: var(--box-shadow);
  border: 3px solid var(--dark);
  border-radius: 0.5rem;
  position: relative;
  margin-bottom: 1.5rem;
}

.review .slide .fa-quote-right {
  position: relative;
  display: flex;
  width: 10%;
  margin: 10px auto;
}

.review .slide .user {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  padding-bottom: 1.5rem;
}

.review .slide .user img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.review .slide .user-info h3 {
  color: var(--black);
  font-size: 1.2rem;
  line-height: 1.5rem;
  padding-bottom: 0.5rem;
}

.review .slide .user-info a h3 {
  color: var(--dark);
}

.review .slide .user-info a h3:hover {
  border-bottom: 1px solid var(--dark);
  margin-bottom: 1rem;
}
.review .slide .user .stars{
display: flex;
justify-content: center;
align-items: center;
}
.review .slide .user i {
  font-size: 0.8rem;
  color: var(--primary);
}

.review .slide p {
  font-size: 1.1rem;
  line-height: 1.15rem;
  color: var(--light-color);
}

.box {
  box-shadow: var(--box-shadow);
  height: 400px;
}
</style>