import { Navigate } from "react-router-dom";

import Home from "../pages/Home";

import Status from '../pages/Status';
// import statusRoutes from "./status";

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "dashboard",
    element: <Navigate to="dashboard" replace />,
  },
  {
    path: "*",
    element: <Status />,
  },
];

export default router;
