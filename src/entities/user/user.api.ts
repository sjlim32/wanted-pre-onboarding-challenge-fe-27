import { UserEntity } from '@/entities/user/user.model';
import { baseAPI } from '@/shared/api/base';

const rootPath = '/users';

export const userAPI = {
  signUp: async (user: UserEntity) => {
    const response = await baseAPI.post(`${rootPath}/create`, user);

    return response.data;
  },
  logIn: async (user: UserEntity) => {
    localStorage.setItem('user', user.email.split('@')[0]);
    const response = await baseAPI.post(`${rootPath}/login`, user);

    return response.data;
  },
};
