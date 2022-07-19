import {
  VuexModule,
  getModule,
  Mutation,
  Action,
  Module,
} from 'vuex-module-decorators';
import store from '@/store';
import { callApiLogin } from '@/api';

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
}

export const UserModule = getModule(User);
