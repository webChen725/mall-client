<template>
  <el-dialog title="商城登录" :visible="visible" @close="closeModal" width="500px">
      <el-form :model="formData" status-icon :rules="rules" label-width="100px" ref="ruleForm">
        <el-form-item label="用户名" prop="userName">
            <el-input type="text" v-model="formData.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPwd">
            <el-input type="password" v-model="formData.userPwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="loginSubmit" class="login-btn">登录</el-button>
        </el-form-item>
      </el-form>
  </el-dialog>
</template>

<script>
import { login } from "@/api/common";
export default {
  name: "LoginModal",
  props: {
    visible: Boolean
  },
  data(){
      return {
          formData: {
              userName: "",
              userPwd: ""
          },
          rules: {
            userName: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
            ],
            userPwd: [
                { required: true, message: '请输入密码', trigger: 'blur' }
            ]
        }
      }
  },
  methods: {
      closeModal(){
        this.$emit("close");
      },
      loginSubmit(){
        this.$refs["ruleForm"].validate(async (valid) => {
            if (!valid) {
                return false;
            }else{
                const res = await login(this.formData);
                if(res.errno == -1){
                    this.$message({
                        message: res.message,
                        type: "error"
                    })
                }else{
                    localStorage.setItem("token", res.data.token)
                    this.$store.dispatch("home/getUserInfo");
                    this.$store.dispatch("home/getUserCarts");
                }
            }
        });
      },
  }
};
</script>

<style scoped>
.login-btn{
    display: block;
    width: 100%;
}
</style>
