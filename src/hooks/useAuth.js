import AuthContext from 'src/contexts/Amplify';
import { useContext } from 'react';

const useAuth = () => 
  useContext(AuthContext);

export default useAuth;