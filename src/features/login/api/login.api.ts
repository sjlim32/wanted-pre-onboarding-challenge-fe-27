import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { userAPI } from '@/entities/user/user.api';
import { UserEntity } from '@/entities/user/user.model';

export const useLogIn = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (user: UserEntity) => userAPI.logIn(user),
    onSuccess: (res) => {
      localStorage.setItem('token', res.token);
      alert(res.message);
      navigate('/todo');
    },
    onError: () => {
      localStorage.removeItem('user');
    },
  });
};
