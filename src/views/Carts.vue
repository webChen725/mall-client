<template>
  <div class="cart-main">
    <div class="cart" v-if="carts.length">
      <CartItem v-for="item of carts" :key="item.id" :cart="item" />
    </div>
    <div v-else class="null">
      <img src="/images/null.jpg" />
    </div>
  </div>
</template>

<script>
import CartItem from "../components/CartItem";
export default {
    name: "Carts",
    components: {
      CartItem
    },
    computed: {
      carts(){
        return this.$store.state.home.cartList;
      }   
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/carts.scss";
</style>