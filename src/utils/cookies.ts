import Cookies from 'js-cookie';

export const UserCookie = (key = '') => {
  const mykey = key;
  return {
    SET_KEY(dataIfys: string) {
      Cookies.set(mykey, dataIfys);
    },
    GET_VALUE() {
      return Cookies.get(mykey);
    },
    CLEAR() {
      Cookies.remove(mykey);
    },
  };
};
