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
  lazy(() => import("../pages/Clients")));
const Analyzer = SuspenseLoader(
  lazy(() => import("../pages/Analyzer")));
const Portfolios = SuspenseLoader(
  lazy(() => import("../pages/Portfolios")));


const dashboardsRoutes = [
  {
    path: "dashboards",
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
    path: "portfolios", 
    element: <Portfolios />,
  }
];

export default dashboardsRoutes;
