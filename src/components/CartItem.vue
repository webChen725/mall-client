<template>
  <div class="cart-item">
      <div class="cart-cover">
          <img :src="cart.good.productCover" />
      </div>
      <div class="cart-desc">
          <h3 class="goods-name">{{cart.good.productName}}</h3>
          <p class="goods-desc">{{cart.good.desc}}</p>
          <div class="cart-about">
              <el-input-number size="mini" v-model="num" :min="1" :max="cart.good.productNum"></el-input-number>
              <span class="price">￥ {{num * cart.good.productPrice}}</span>
          </div>
          <div class="del-btn">
              <el-button size="mini" type="danger" @click="deleteCart">从购物车删除</el-button>
          </div>
      </div>
  </div>
</template>

<script>
import { deleteCart } from "@/api/carts"
export default {
    name: "OrderItem",
    props: {
        cart: Object
    },
    data(){
        return {
            num: 1
        }
    },
    mounted(){
        this.num = this.cart.productNum;
    },
    methods: {
        async deleteCart(){
            const res = await deleteCart(this.cart.id);
            if(res.errno == -1){
                this.$message({
                    type: "error",
                    message: res.message
                })
            }else{
                this.$store.dispatch("home/getUserCarts")
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.cart-item{
    width: 100%;
    height: auto;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    margin-bottom: 1rem;
    box-shadow: 0 0 10px #eee;
    .cart-cover{
        width: 120px;
        height: auto;
        overflow: hidden;
        img{
            width: 100%;
            height: auto;
        }
    }
    .cart-desc{
        margin-left: 1rem;
        flex: 1;
        .goods-name{
            line-height: 2rem;
            color: #333;
            font-size: 15px;
        }
        .goods-desc{
            font-size: 14px;
            color: #888;
        }
        .cart-about{
            margin-top: 1rem;
            display: flex;
            align-items: center;
            .price{
                margin-left: 1rem;
                font-size: 14px;
                color: rgb(211, 15, 35);
            }
        }
        .del-btn{
            margin-top: 1rem;
        }
    }
}
</style>