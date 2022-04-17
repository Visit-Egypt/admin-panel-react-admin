import * as React from "react";
import { Route } from "react-router-dom";
import Configuration from "./configuration/Configuration";
import Segments from "./segments/Segments";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  <Route exact path="/configuration" render={() => <Configuration />} />,
  <Route exact path="/segments" render={() => <Segments />} />,
];
