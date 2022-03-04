import { Navigate } from "react-router-dom";
import Dashboard from "../layouts/Dashboard/"
import Home from "../pages/Home";
import Status from '../pages/Status';
import dashboardsRoutes from "./dashboard";
// import statusRoutes from "./status";

const router = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: 'dashboard',
        element: <Navigate to={<Dashboard/>} />,
        children: dashboardsRoutes,
      },
      {
        path: "*",
        element: <Status />,
      },
    ]
  }
];

export default router;
