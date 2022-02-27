import { FC } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button } from '../../../../components/button';
import { auth } from '../../../../common/firebase';

export const LoginForm: FC = () => {
  const provider = new GoogleAuthProvider();
  const onClick = () => signInWithPopup(auth, provider);

  return <Button {...{ text: 'Login with Google', onClick }} />;
};
