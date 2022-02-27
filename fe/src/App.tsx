import { useUserContext } from './common/user';
import { Loading } from './components/loading';
import { Auth } from './modules/auth';
import { Dashboard } from './modules/dashboard';

export const App = () => {
  const { uid } = useUserContext();
  return <>{uid ? <Dashboard /> : <Auth />}</>;
};
