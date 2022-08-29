import React from "react";
import ReactDOM from "react-dom";
import NetworkInfo from "./network-info";
import "./index.scss";

const App = () => (
  <div className="max-w-6xl mx-auto mt-10 text-3xl">
    <NetworkInfo />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
