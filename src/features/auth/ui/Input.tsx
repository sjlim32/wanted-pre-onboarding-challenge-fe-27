import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

import { AuthForm } from '@/features/auth/model/validation';

interface InputProps {
  children: React.ReactNode;
}

export function Input({ children }: InputProps) {
  return <div className="input-wrapper">{children}</div>;
}

interface FieldProps {
  type?: string;
  placeholder: string;
  register: UseFormRegister<AuthForm>;
  name: keyof AuthForm;
}

function Field({ type = 'text', placeholder, register, name }: FieldProps) {
  return <InputContainer type={type} placeholder={placeholder} {...register(name)} />;
}

interface ErrorProps {
  errors: FieldErrors<AuthForm>;
  name: keyof AuthForm;
}

function Error({ errors, name }: ErrorProps) {
  const errorMessage = errors[name]?.message;
  return errorMessage ? <ErrorContainer>{errorMessage}</ErrorContainer> : <ErrorContainer />;
}

interface LabelProps {
  text: string;
}

function Label({ text }: LabelProps) {
  return <label className="input-label">{text}</label>;
}

Input.Field = Field;
Input.Error = Error;
Input.Label = Label;

const InputContainer = styled.input`
  width: 100%;
  height: 2rem;

  padding: 0.5rem 0rem;
  font-size: 1.2rem;
  text-align: center;

  background-color: transparent;
  border: 2px solid transparent;

  transition: border-color 0.3s ease;
  &:focus {
    border: 2px solid #6495ed;
    border-radius: 0.2rem;
    outline: none;
  }

  &:not(:focus) {
    border-color: transparent;
  }
`;

const ErrorContainer = styled.div`
  color: red;
  text-align: center;
  font-size: 0.8rem;
`;
