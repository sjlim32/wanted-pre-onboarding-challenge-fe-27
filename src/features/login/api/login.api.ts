import { useMutation } from '@tanstack/react-query';

import { userAPI } from '@/entities/user/user.api';
import { UserEntity } from '@/entities/user/user.model';

export const useLogIn = () => {
  return useMutation({
    mutationFn: (user: UserEntity) => userAPI.logIn(user),
  });
};
