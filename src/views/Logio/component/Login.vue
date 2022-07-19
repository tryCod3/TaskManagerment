<template>
  <el-form :model="modelLogin" ref="modelLogin" status-icon :rules="rules">
    <el-form-item label="Account" prop="account">
      <el-input
        ref="account"
        type="text"
        autocomplete="off"
        v-model.trim="modelLogin.account"
      ></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input
        type="password"
        autocomplete="off"
        v-model.trim="modelLogin.password"
      ></el-input>
    </el-form-item>
    <el-form-item label="Age" prop="age">
      <el-input
        type="number"
        autocomplete="off"
        v-model.number="modelLogin.age"
      >
      </el-input>
    </el-form-item>
    <el-form-item>
      <button-comp
        title="Submit"
        :loading="loading"
        :plain="true"
        :action="handleLogin"
      ></button-comp>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ButtonComp from '@/components/button/index.vue';
import { ElForm } from 'element-ui/types/form';
import { Input } from 'element-ui';
@Component({
  name: 'Login',
  components: {
    ButtonComp,
  },
})
export default class extends Vue {
  private modelLogin = {
    account: '',
    password: '',
    age: '18',
  };

  private loading = false;

  private passwordValidate = (rule: any, value: string, callback: Function) => {
    if (value.length < 5) {
      callback(new Error('The password must be at least 10 characters'));
    } else {
      callback();
    }
  };

  private ageValidate = (rule: any, value: string, callback: Function) => {
    if (+value < 5) {
      callback(new Error('The age must be > 5'));
    } else {
      callback();
    }
  };

  private accountValidate = (rule: any, value: string, callback: Function) => {
    /*eslint no-undef: 0*/
    //eslint-disable-next-line
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (value.length === 0 || format.test(value)) {
      callback(new Error('The account not empty and no charater special'));
    } else {
      callback();
    }
  };

  private rules = {
    password: [{ validator: this.passwordValidate, trigger: 'blur' }],
    age: [{ validator: this.ageValidate, trigger: 'blur' }],
    account: [{ validator: this.accountValidate, trigger: 'blur' }],
  };

  private handleLogin() {
    (this.$refs.modelLogin as ElForm).validate((valid) => {
      if (valid) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }

  mounted() {
    console.log(this.$refs.account);
    (this.$refs.account as Input).focus();
  }
}
</script>

<style lang="scss" scoped>
.el-form {
  .el-form-item {
    width: 400px;
  }
}
</style>
