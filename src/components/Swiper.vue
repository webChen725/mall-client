<template>
  <div class="swiper-content">
    <el-carousel :interval="5000" arrow="always" height="500px">
      <el-carousel-item v-for="item in images" :key="item">
        <img class="side-img" :src="item" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    images: Array
  }
};
</script>

<style lang="scss" scoped>
.swiper-content {
  width: 80%;
  .side-img {
    width: 100%;
    height: 100%;
  }
}
</style>
