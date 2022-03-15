import { createContext, FC, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

type UserContextType = {
  uid: string | undefined;
};

const UserContext = createContext<UserContextType>({
  uid: '',
});

const { Provider } = UserContext;

export const UserProvider: FC = ({ children }) => {
  const [uid, setUid] = useState<string>();

  useEffect(() => {
    return auth.onAuthStateChanged((user) => setUid(user?.uid ?? ''));
  }, []);

  const value = { uid };

  return <Provider {...{ value }}>{children}</Provider>;
};

export const useUserContext = () => useContext(UserContext);
