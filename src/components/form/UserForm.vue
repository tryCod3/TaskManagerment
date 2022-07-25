<template>
  <section class="userform-container">
    <h1>Infomation User</h1>
    <el-form
      :model="userInfor"
      ref="userInfor"
      status-icon
      :disabled="!enabledEdit"
    >
      <el-form-item label="Account" prop="account">
        <el-input
          ref="account"
          type="text"
          autocomplete="off"
          v-model.trim="userInfor.account"
        ></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          type="password"
          autocomplete="off"
          v-model.trim="userInfor.password"
        ></el-input>
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input
          type="number"
          autocomplete="off"
          v-model.number="userInfor.age"
        >
        </el-input>
      </el-form-item>
    </el-form>
    <div class="boxButton">
      <button-comp
        :title="textStatusForm"
        :loading="false"
        :type="typeUpdate"
        :plain="true"
        :action="handleUpdateAccount"
      >
      </button-comp>
      <template v-if="showReset">
        <button-comp
          title="Reset Account"
          :loading="false"
          :plain="true"
          :action="handleResetAccount"
        ></button-comp>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'vue-property-decorator';
import ButtonComp from '@/components/button/index.vue';
import { UserModule } from '@/store/modules/user';
import { successMessage } from '@/utils/notify';
import _ from 'lodash';

const TURN_ENABLE = 'Enable Update Account';
const UPDATE_ACCOUNT = 'Update Account';

@Component({
  name: 'UserForm',
  components: {
    ButtonComp,
  },
})
export default class extends Vue {
  @Prop({
    default: '',
  })
  account!: string;
  @Prop({
    default: '',
  })
  password!: string;
  @Prop({
    default: 0,
  })
  age!: number;

  userInfor = {
    account: this.account,
    password: this.password,
    age: this.age,
    roles: [],
    token: '',
  };

  saveUser = {
    account: '',
    password: '',
    age: 0,
    roles: [],
    token: '',
  };

  private textStatusForm = TURN_ENABLE;
  private typeUpdate = 'info';
  private enabledEdit = false;
  private showReset = false;

  created() {
    const { account, password, age } = this.userInfor;
    // if user not pass props for component , load cookie
    if (!account || !password || !age) {
      UserModule.getAccount()?.then((res: any) => {
        if (res === null) throw new Error(`Error , User not found`);
        else {
          this.userInfor = {
            ...res,
          };
          this.saveUser = {
            ...this.userInfor,
          };
        }
      });
    }
  }

  handleUpdateAccount() {
    if (this.typeUpdate === 'info') {
      this.turnOnUpdate();
    } else {
      UserModule.SET_INFO(this.userInfor);
      this.saveUser = {
        ...this.userInfor,
      };
      this.handleResetAccount();
      successMessage('Update User Thành Công!');
    }
  }

  handleResetAccount() {
    this.turnOffUpdate();
    this.userInfor = {
      ...this.saveUser,
    };
  }

  @Watch('userInfor', {
    deep: true,
  })
  private changeUserInfor() {
    if (!_.isEqual(this.userInfor, this.saveUser)) {
      this.showReset = true;
    } else {
      this.showReset = false;
    }
  }

  private turnOnUpdate() {
    this.typeUpdate = 'success';
    this.enabledEdit = true;
    this.textStatusForm = UPDATE_ACCOUNT;
  }

  private turnOffUpdate() {
    this.typeUpdate = 'info';
    this.enabledEdit = false;
    this.textStatusForm = TURN_ENABLE;
  }
}
</script>

<style lang="scss">
.userform-container {
  width: 100%;

  .el-form .el-form-item .el-form-item__content .el-input .el-input__inner {
    color: black;
  }

  .boxButton {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}
</style>
