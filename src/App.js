import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./views/Home";

import "./styles/Global.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
