<template>
  <div class="addr-item">
      <div class="desc">
          <h3 class="name">收货人: <i>{{addr.userName}}</i></h3>
          <p class="addr-desc">{{addr.addr}}</p>
          <p class="addr-post">邮编: <i>{{addr.postCode}}</i></p>
          <div class="btn-group">
              <el-button type="danger" size="mini" @click="setDefault">设为默认地址</el-button>
              <el-button type="danger" size="mini" @click="deleteAddr">删除地址</el-button>
          </div>
      </div>
      <el-tag v-if="addr.isDefault == 1" class="tag" type="danger">默认地址</el-tag>
  </div>
</template>

<script>
import { setDefault, deleteAddr } from "@/api/address";
export default {
    name: "AddrItem",
    props: {
        addr: Object
    },
    mounted(){
        console.log(this.addr)
    },
    methods: {
        async setDefault(){
            const res = await setDefault(this.addr.id);
            if(res.errno == -1){
                this.$message({
                    type: "error",
                    message: "设置默认地址失败"
                })
                return;
            }else{
                this.$message({
                    type: "success",
                    message: "设置成功"
                });
                this.$store.dispatch("addr/getAddrList");
            }
        },
        async deleteAddr(){
            const res = await deleteAddr(this.addr.id);
            if(res.errno == -1){
                this.$message({
                    type: "error",
                    message: "删除地址失败"
                })
                return;
            }else{
                this.$message({
                    type: "success",
                    message: "删除成功"
                });
                this.$store.dispatch("addr/getAddrList");
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.addr-item{
    box-shadow: 0 0 10px #eee;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    .name, .addr-desc, .addr-post{
        line-height: 1.5rem;
        font-size: 15px;
    }
    .btn-group{
        margin-top: 1rem;
    }
    .tag{
        position: absolute;
        top: .5rem;
        right: 1rem;
    }
}
</style>