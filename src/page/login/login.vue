<template>
  <div class="login_page fillcontain">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer" v-show="showLogin">
		  		<div class="manage_tip">
		  			<p>{{sysName}}</p>
		  		</div>
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username" :placeholder="formUserMsg"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" :placeholder="formPassMsg" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">{{submitBtn}}</el-button>
            </el-form-item>
				  </el-form>
          <p class="tip">{{formTip}}</p>
	  		</section>
	  	</transition>
  	</div>
</template>

<script lang="ts">
  import Vue from "vue";
  import { Component, Watch } from 'vue-property-decorator';
  import { State, Getter, Action, Mutation } from 'vuex-class';
  import { login } from "../../service/getData";
  import { SYS_NAME, FORM_USER_MSG, FORM_PASS_MSG, FORM_SUBMIT_MSG, FORM_TIP, FORM_USER_TIP, FORM_PASS_TIP, LOGIN_CHECK, FORM_CHECK_TIP, SIGN_IN_SUCCESS } from "../../content";

  @Component
  export default class Login extends Vue{
    @State adminInfo;
    @Action getAdminData;

    loginForm = { username: "", password: "" };
    sysName = SYS_NAME;
    formUserMsg = FORM_USER_MSG;
    formPassMsg =FORM_PASS_MSG;
    submitBtn = FORM_SUBMIT_MSG;
    formTip = FORM_TIP;
    rules: any = {
      username: [{ required: true, message: FORM_USER_TIP, trigger: "blur" }],
      password: [{ required: true, message: FORM_PASS_TIP, trigger: "blur" }]
    };
    showLogin: boolean = false;

    mounted() {
      this.showLogin = true;
      if(!this.adminInfo.id) this.getAdminData();
    }

    @Watch('Info')
    onAdminInfo(val: any, oldVal: any) {
      if(val.id){
        this.$message({
          type: 'success',
          message: LOGIN_CHECK
        })
        // this.$router.push(manage);
      }
    }

    async submitForm(fromName){
      (this.$refs[fromName] as HTMLFormElement).validate(async (valid)=>{
        // this.$router.push("manage");
        if(valid){
          const res = await login({user_name: this.loginForm.username, password: this.loginForm.password});
          this.$message({
            type: "success",
            message: SIGN_IN_SUCCESS
          });
          this.adminInfo.isLogin = true;
          this.$router.push("manage");
          // if(res.status == 1){
          //   this.$message({
          //     type: "success",
          //     message: "Success"
          //   });
          //   this.$router.push("manage");
          // } else {
          //   this.$message({
          //     type: "error",
          //     message: "Error"
          //   });
          // }
        } else {
          this.$notify.error({
            title: "",
            message:FORM_CHECK_TIP,
            offset: 100
          })
          return false;
        }
      })
    }


  }
</script>

<style lang="scss" scoped>
@import "../../style/_var.scss";
  .login_page{
    width: 100vw;
    background-color: #324057;
    display: -webkit-flex; /* Safari */
    display: flex;
    align-items: center;
	}
	.manage_tip{
		margin-top: -120px;
		p{
			font-size: 34px;
			color: #fff;
		}
	}
	.form_contianer{
    @include wh(320px,210px);
		padding: 25px;
		border-radius: 5px;
		text-align: center;
    background-color: #fff;
    margin: 0 auto;
    display: block;
		.submit_btn{
			width: 100%;
			font-size: 16px;
		}
	}
	.tip{
		font-size: 12px;
		color: red;
	}
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>
