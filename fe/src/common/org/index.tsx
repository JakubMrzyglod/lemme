import { getDoc, onSnapshot } from 'firebase/firestore';
import { createContext, FC, useContext, useEffect, useState } from 'react';
import { Collection } from '../firebase/constants';
import { useDbRef } from '../firebase/useCollPath';
import { useUserContext } from '../user';

type Settings = {
  invoiceCount?: { [key: string]: number };
};

type OrgContextType = {
  settings: Settings;
};

const OrgContext = createContext<OrgContextType>({} as OrgContextType);

const { Provider } = OrgContext;

export const OrgProvider: FC = ({ children }) => {
  const [settings, setSettings] = useState<Settings>({});
  const { getDocRef } = useDbRef(Collection.ORGANIZATIONS);
  const { uid } = useUserContext();
  useEffect(() => {
    if (uid) {
      const docRef = getDocRef(uid);
      return onSnapshot(docRef, (snapshot) =>
        setSettings(snapshot.data() as Settings)
      );
    }
  }, [uid]);

  const value = { settings };

  return <Provider {...{ value }}>{children}</Provider>;
};

export const useOrgContext = () => useContext(OrgContext);
