import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { AuthFormInputs, authSchema } from '@/features/auth/model/validation';

export default function SignUp() {
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
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}

        <input type="password" placeholder="Password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">SignUp</button>
      </form>
    </>
  );
}
