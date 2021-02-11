<template>
  <div class="detail" v-if="goods">
    <main>
      <div class="cover">
        <img :src="goods.productCover" />
      </div>
      <div class="desc">
        <h3>{{goods.productName}}</h3>
        <p class="intro">{{goods.desc}}</p>
        <p class="price">
          ￥ {{goods.productPrice}}
        </p>
        <p class="count">
          商品余容: {{goods.productNum}}
        </p>
        <div class="toCart">
          <el-input-number 
            v-model="goodsNum"
            :step="1"
            :min="1" :max="goods.productNum">
          </el-input-number>
          <el-button type="danger" class="btn" @click="addCart">加入购物车</el-button>
          <el-button type="warning" class="btn" @click="toOrder">立即购买</el-button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { addCart } from "@/api/detail"
export default {
  name: "Detail",
  data(){
    return {
      goodsNum: 1
    }
  },
  created(){
    if(!this.$store.state.home.goodsList.length){
      this.$store.dispatch("home/getGoodsList")
    }
  },
  computed: {
    goods(){
      let id = this.$route.query.id;
      return this.$store.state.home.goodsList.find(item => item.id == id);
    }
  },
  methods: {
    async addCart(){
      const goodId = this.goods.id;
      const res = await addCart({
        goodId,
        productNum: this.goodsNum
      })
      if(res.errno == -1){
        this.$message({
          type: "error",
          message: res.message
        })
      }else{
        this.$message({
          type: "success",
          message: "添加购物车成功"
        })
        this.$store.dispatch("home/getUserCarts")
      }
    },
    toOrder(){
      // 前往订单页面
      this.$router.push({
        path: "/order",
        query: {
          goodsId: this.goods.id,
          goodsNum: this.goodsNum
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/detail.scss";
</style>
