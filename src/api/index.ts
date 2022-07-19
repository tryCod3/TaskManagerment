const datas = [
  { account: 'Admin', password: '123456', roles: ['admin'], token: '123' },
  { account: 'Dev', password: '123456', roles: ['developer'], token: '456' },
  { account: 'User', password: '123456', roles: ['user'], token: '789' },
  {
    account: 'Role',
    password: '123456',
    roles: ['admin', 'developer'],
    token: '2708',
  },
];

export const callApiLogin = async (account: string, password: string) => {
  return new Promise<any>((resolve, reject) => {
    for (let i = 0; i < datas.length; i++) {
      if (datas[i].account === account && datas[i].password === password) {
        resolve({
          success: true,
          token: datas[i].token,
          roles: datas[i].roles,
        });
        return;
      }
    }
    resolve({
      success: false,
      token: '',
      roles: [],
    });
  });
};

export const callApiResetToken = async () => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};
