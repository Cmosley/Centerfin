import { Navigate } from 'react-router-dom';
import Status from './status';


const statusRoutes = [
  
  {
    path: '*',
    element: <Status />
  }
]

export default statusRoutes;
