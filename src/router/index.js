import { Navigate } from "react-router-dom";

import Login from '.src/pages/Login';
import Signup from '.src/pages/Signup';

import StatusLayout from ".src/pages/StatusLayout";
import statusRoutes from "./status";

const router = [
  {
    path: "login",
    element: <Login />
  },
  {
    path: "signup",
    element: <Signup />
  },
  {
    path: "*",
    element: <StatusLayout />,
    children: statusRoutes
  }
];

export default router;
