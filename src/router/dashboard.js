import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

import Loader from "../components/Loader/Loader"

const SuspenseLoader = (Component) => (props) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

// Dashboards

const Clients = SuspenseLoader(
  lazy(() => import("src/pages/Clients")));
const Analyzer = SuspenseLoader(
  lazy(() => import("src/pages/Analytics")));
const Portfolio = SuspenseLoader(
  lazy(() => import("src/pages/Portfolio")));


const dashboardsRoutes = [
  {
    path: "/",
    element: <Navigate to="clients" replace />,
  },
  {
    path: "clients",
    element: <Clients />,
  },
  {
    path: "analyzer",
    element: <Analyzer />,
  },
  {
    path: "portfolio", 
    element: <Portfolio />,
  }
];

export default dashboardsRoutes;
