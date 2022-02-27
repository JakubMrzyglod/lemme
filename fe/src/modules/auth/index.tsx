import { FC } from 'react';
import { LoginForm } from './components/login-form';
import { AuthBox } from './elements/auth-container';
import { AuthFormBox } from './elements/auth-form-box';
import { AuthTitle } from './elements/auth-title';

export const Auth: FC = () => (
  <AuthBox>
    <AuthTitle />
    <AuthFormBox>
      <LoginForm />
    </AuthFormBox>
  </AuthBox>
);
