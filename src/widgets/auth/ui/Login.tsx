import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

import { AuthFormInputs, authSchema } from '@/widgets/auth/model/validation';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInputs>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = (data: AuthFormInputs) => {
    console.log(data);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}

        <input type="password" placeholder="Password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Login</button>
      </form>
    </>
  );
}
