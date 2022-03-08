import Dashboard from "../layouts/Dashboard/"
import Home from "../pages/Home";
import Status from '../pages/Status';
import dashboardsRoutes from "./dashboard";
// import statusRoutes from "./status";

const router = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: 'dashboard',
    element: <Dashboard/> ,
    children: dashboardsRoutes,
  },
  {
    path: "*",
    element: <Status />,
  },
  
];

export default router;
