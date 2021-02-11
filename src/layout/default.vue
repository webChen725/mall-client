<template>
  <div class="layout">
    <header class="header">
      <div class="logo">
        <router-link to="/">
          <img class="brand-logo" src="/images/logo.png" />
        </router-link>
      </div>
      <div class="search">
        <el-autocomplete
          v-model="result"
          :fetch-suggestions="search"
          placeholder="请输入搜索商品关键字"
          @select="() => {}"
          :trigger-on-focus="false"
          :style="{ maxWidth: '320px' }"
        >
        </el-autocomplete>
      </div>
      <div class="user-area">
        <ul class="nav-user-info">
          <li class="user-info">
            <a href="#" @click.prevent="showLoginModal" v-if="!auth">
              <i class="el-icon-s-custom"></i>
            </a>
            <span class="avatar" v-else-if="auth && userInfo">
                <img v-if="userInfo.myPhoto" :src="userInfo.myPhoto" />
                <i v-else>{{userInfo.userName[0]}}</i>
            </span>
          </li>
          <li class="cart" v-if="auth">
            <el-dropdown>
              <span class="cart-icon">
                <i class="el-icon-shopping-cart-full"></i>
                <b class="count">{{carts.length}}</b>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="item of carts" :key="item.id">
                    <span class="cart-item">
                        <i>{{item.good.productName}}</i>
                        <el-tag class="tag">{{item.productNum}}</el-tag>
                    </span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </header>
    <slot></slot>
    <footer class="footer">
      <span class="copy-right">
        CopyRight &copy; 2021-02-06 Mall 版权所有
      </span>
      <ul class="about">
        <li
          v-for="(item, index) in ['关于我们', '团队 & 加入', '商业合作']"
          :key="index"
        >
          <a href="#">{{ item }}</a>
        </li>
      </ul>
    </footer>

    <!-- 登录modal -->
    <LoginModal :visible="showModal" @close="closeLoginModal" />
  </div>
</template>

<script>
import LoginModal from "@/components/LoginModal.vue";
import { searchGoods } from "@/api/common";
export default {
  name: "default-layout",
  components: {
    LoginModal
  },
  data() {
    return {
      result: "",
      showModal: false,
      auth: false
    };
  },
  created(){
      if(localStorage.getItem("token")){
          this.auth = true;
          if(!this.$store.state.home.userInfo){
              this.$store.dispatch("home/getUserInfo");
              this.$store.dispatch("home/getUserCarts");
          }
      }
  },
  methods: {
    async search(keyword, callback) {
      const res = await searchGoods(keyword);
      const values = res.rows?.map(item => {
        return {
          value: item.productName,
          id: item.id
        };
      });
      callback(values);
    },
    showLoginModal() {
      this.showModal = true;
    },
    closeLoginModal(){
        this.showModal = false;
    }
  },
  computed: {
      userInfo(){
          return this.$store.state.home.userInfo;
      },
      carts(){
          return this.$store.state.home.cartList;
      }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: 70px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 0 10px #ccc;
  .logo {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .brand-logo {
    width: 120px;
    vertical-align: middle;
  }
  .search {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user-area {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    .nav-user-info {
      display: flex;
      font-size: 1.5rem;
    }
    li {
      margin: 0 1rem;
    }
    .user-info a {
      color: #666;
    }
    .cart {
        position: relative;
        .cart-icon {
            font-size: 1.5rem;
            outline: none;
        }
        .count{
            position: absolute;
            top: 0;
            left: 1.1rem;
            font-weight: 400;
            color: #fff;
            display: inline-block;
            width: 16px;
            height: 16px;
            font-size: 12px;
            border-radius: 50%;
            background: rgb(187, 36, 36);
            text-align: center;
            line-height: 16px;   
        }
    }
    .avatar{
        width: 30px;
        height: 30px;
        display: inline-block;
        background: rgb(240, 188, 77);
        color: #fff;
        border-radius: 50%;
        text-align: center;
        font-size: 16px;
        line-height: 30px;
        overflow: hidden;
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
        }
    }
  }
}
.footer {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  .copy-right {
    font-size: 0.8rem;
    color: #666;
  }
  .about {
    display: flex;
    margin-left: 1rem;
    li {
      margin: 1rem;
      a {
        color: #888;
        text-decoration: none;
        font-size: 0.8rem;
      }
    }
  }
}

.cart-item{
    display: flex;
    min-width: 240px;
    align-items: center;
    i{
        flex: 1;
    }
    .tag{
        margin-left: 1rem;
        height: 20px;
        line-height: 20px;
    }
}
</style>
