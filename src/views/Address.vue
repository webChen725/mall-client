<template>
  <div class="addr">
      <main v-if="$store.state.addr.addrList.length">
          <AddrItem v-for="item of $store.state.addr.addrList" :key="item.id" :addr="item" />
      </main>
      <div v-else class="null">
      <img src="/images/null.jpg" />
    </div>
  </div>
</template>

<script>
import AddrItem from "../components/AddrItem";
export default {
    name: "Address",
    components: {
        AddrItem
    },
    created(){
        this.$store.dispatch("addr/getAddrList");
    },
    // mounted(){
    //     // console.log(this.$store.state.addr.addrList)
    // }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/address.scss";
</style>