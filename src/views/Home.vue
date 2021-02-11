<template>
  <div class="home">
    <Swiper :images="swiperList" />
    <main class="main">
      <nav class="goods-head">
        <span>排序: </span>
        <ul class="sort-method">
          <li>
            <a href="#" :class="[orderActive == 'default' ? 'active' : '']" @click.prevent="toggleDefault">默认</a>
          </li>
          <li>
            <a href="#" 
              :class="[orderActive == 'price' ? 'active' : '']"
              @click.prevent="togglePrice"
            >
              价格<i :class="[order === 'asc' ? 'el-icon-top' : 'el-icon-bottom']"></i></a>
          </li>
        </ul>
      </nav>
      <ul class="goods-list">
        <li
          class="goods-item"
          v-for="item in $store.state.home.goodsList"
          :key="item.id"
        >
          <GoodsItem :goods="item" />
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Swiper from "@/components/Swiper.vue";
import GoodsItem from "@/components/GoodsItem.vue";
export default {
  name: "Home",
  components: {
    Swiper,
    GoodsItem
  },
  data() {
    return {
      swiperList: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1d59dba816517e804251fd031963032d.jpg?w=2452&h=920",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a60c7eb2229733d85d8b4aea3be4ddd.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ebff5f5c1f52f2dbdd611897adbefd4.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ef4160c861b998239bce9adb82341e7.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
      ],
      orderActive: "default",
      order: "asc"
    };
  },
  mounted() {
    this.$store.dispatch("home/getGoodsList", "");
  },
  methods: {
    toggleDefault(){
      if(this.orderActive !== "default"){
        this.$store.dispatch("home/getGoodsList", "");
      }
      this.orderActive = "default";
    },
    togglePrice(){
      if(this.orderActive !== "price"){
        this.orderActive = "price";
        this.$store.dispatch("home/getGoodsList", `?priceOrder=${this.order}`);
      }else{
        if(this.order === "asc"){
          this.order = "desc";
        }else{
          this.order = "asc";
        }
        this.$store.dispatch("home/getGoodsList", `?priceOrder=${this.order}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/home.scss";
</style>
