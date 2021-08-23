import Loadable from "react-loadable";
import React from "react";
import { Spinner } from "reactstrap";

export const HomePageView = Loadable({
  loader: () => import("./Homepage"),
  loading: () => <Spinner color="dark" />,
});

export const ContactView = Loadable({
  loader: () => import("./Contact"),
  loading: () => <Spinner color="dark" />,
});

export const ErrorPageView = Loadable({
  loader: () => import("./ErrorPage"),
  loading: () => <Spinner color="dark" />,
});
