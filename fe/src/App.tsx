import { useUserContext } from './common/user';
import { Auth } from './modules/auth';
import { Dashboard } from './modules/dashboard';

export const App = () => {
  const { uid } = useUserContext();
  return <>{uid ? <Dashboard /> : <Auth />}</>;
};
