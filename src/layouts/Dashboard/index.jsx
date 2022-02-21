import {Box} from '@mui/material'
import { useAuthenticator } from '@aws-amplify/ui-react';
import NavBar from './NavBar/NavBar'

const Dashboard = (props) => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);


  return (
    <>
      <h1>Dashboard</h1>
      <h2>Welcome, {user.username}!</h2>
      <button onClick={signOut}>Sign Out</button>
      <NavBar />
    </>
  );
}

export default Dashboard;