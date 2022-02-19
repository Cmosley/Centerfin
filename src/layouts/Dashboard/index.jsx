import {Box} from '@mui/material'
import { useAuthenticator } from '@aws-amplify/ui-react';

const Dashboard = (props) => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);


  return (
    <>
      <h1>Dashboard</h1>
      <h2>Welcome, {user.username}!</h2>
      <button onClick={signOut}>Sign Out</button>
    </>
  );
}

export default Dashboard;