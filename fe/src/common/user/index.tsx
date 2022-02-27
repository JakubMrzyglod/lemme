import { createContext, FC, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

type UserContextType = {
  uid: string;
};

const UserContext = createContext<UserContextType>({
  uid: '',
});

const { Provider } = UserContext;

export const UserProvider: FC = ({ children }) => {
  const [uid, setUid] = useState<string>();
  console.log(typeof uid);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUid(user?.uid ?? '');
    });
    return unsubscribe;
  }, []);

  const value = { uid: uid ?? '' };

  return <Provider {...{ value }}>{children}</Provider>;
};

export const useUserContext = () => useContext(UserContext);
