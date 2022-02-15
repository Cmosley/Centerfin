import { Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Status from '../pages/Status';
// import statusRoutes from "./status";

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "dashboard",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "*",
    element: <Status />,
  },
];

export default router;
