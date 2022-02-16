import { AuthContext } from '../contexts/Amplify';
import { useContext } from 'react';

const useAuth = () => 
  useContext(AuthContext);

export default useAuth;