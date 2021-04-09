import { lazy } from "react";

export const routes = {
  path: "/login",
  name: "ROUTE:LOGIN",
  exact: true,
  layout: "admin",
  component: lazy(() => import("./view")),
};
