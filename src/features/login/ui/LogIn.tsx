import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { AuthForm, authSchema } from '@/features/auth/model/validation';
import { Input } from '@/features/auth/ui/Input';
import { useLogIn } from '@/features/login/api/login.api';
import Button from '@/shared/ui/Button';

export default function LogIn() {
  const { mutate: logIn } = useLogIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = (data: AuthForm) => {
    logIn(data);
  };

  return (
    <LogInWrapper>
      <FormContainer>
        <InputBox>
          <Input.Field type="email" placeholder="Email" register={register} name="email" />
          <Input.Error errors={errors} name="email" />
        </InputBox>

        <InputBox>
          <Input.Field type="password" placeholder="Password" register={register} name="password" />
          <Input.Error errors={errors} name="password" />
        </InputBox>
      </FormContainer>
      <Button title="로그인" onClick={handleSubmit(onSubmit)} size={2} />
    </LogInWrapper>
  );
}

const LogInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -2px;

  width: 100%;
  height: 30rem;

  border: 2px solid #cd8e7d99;
  border-top: none;
  border-radius: 0 0 0.5rem 0.5rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  height: 6rem;
  width: 25rem;
`;
