import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { AUTH_TAB } from '@/features/auth/model/auth.const';
import { AuthForm, authSchema } from '@/features/auth/model/validation.model';
import { AuthInput } from '@/features/auth/ui/AuthInput';
import { useSignUp } from '@/features/signup/api/signup.api';
import Button from '@/shared/ui/Button';

interface SignUpProps {
  onToggle: (tab: AUTH_TAB) => void;
}

export default function SignUp({ onToggle }: SignUpProps) {
  const { mutate: signUp } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = (data: AuthForm) => {
    signUp(data);
    onToggle('logIn');
  };

  return (
    <LogInWrapper>
      <FormContainer>
        <InputBox>
          <AuthInput.Field type="email" placeholder="Email" register={register} name="email" />
          <AuthInput.Error errors={errors} name="email" />
        </InputBox>

        <InputBox>
          <AuthInput.Field
            type="password"
            placeholder="Password"
            register={register}
            name="password"
          />
          <AuthInput.Error errors={errors} name="password" />
        </InputBox>
      </FormContainer>
      <Button title="가입" onClick={handleSubmit(onSubmit)} size={2} />
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
