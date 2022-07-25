import {
  VuexModule,
  getModule,
  Mutation,
  Action,
  Module,
} from 'vuex-module-decorators';
import store from '@/store';
import { callApiLogin, callApiResetToken } from '@/api';
import { PermissionModule } from './permission';
import { UserCookie } from '@/utils/cookies';

const userCookie = UserCookie('user-key');

export interface IUserState {
  account: string;
  password: string;
  age: number;
  roles: string[];
  token: string;
}

@Module({ dynamic: true, name: 'user', store })
class User extends VuexModule implements IUserState {
  account = '';
  password = '';
  age = 0;
  roles: string[] = [];
  token = '';

  @Mutation
  SET_INFO(user: IUserState): void {
    this.account = user.account;
    this.password = user.password;
    this.age = user.age;
    this.roles = user.roles;
    this.token = user.token;
    userCookie.SET_KEY(JSON.stringify(user));
  }

  @Mutation
  REFRESH() {
    this.account = '';
    this.password = '';
    this.age = 0;
    this.roles = [];
    this.token = '';
    userCookie.CLEAR();
  }

  @Action
  public async Login(userInfo: {
    account: string;
    password: string;
    age: number;
  }) {
    const { account, password, age } = userInfo;
    const res = await callApiLogin(account, password);
    if (res.success)
      this.SET_INFO({ ...userInfo, token: res.token, roles: res.roles });
    return res;
  }

  @Action
  public async getAccount() {
    const data = userCookie.GET_VALUE();
    // if cookie and token no live
    // user no account
    if (data === undefined && this.token === '') {
      return null;
    }
    // when user load web
    if (typeof data === 'string' && this.token === '') {
      const iUser = await JSON.parse(data);
      this.SET_INFO(iUser);
      return iUser;
    }
    // have account
    const user: IUserState = {
      account: this.account,
      password: this.password,
      age: this.age,
      roles: this.roles,
      token: this.token,
    };
    return user;
  }

  @Action
  public async Logout() {
    await callApiResetToken();
    this.REFRESH();
    PermissionModule.refresh();
  }
}

export const UserModule = getModule(User);
