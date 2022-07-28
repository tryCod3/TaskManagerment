const typeRoles = 'admin' | 'dev' | 'user';

export interface IUser {
  id: string;
  email: string;
  name: string;
  password: string;
  adress: string;
  roles: string[];
}
