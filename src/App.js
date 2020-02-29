import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Loading from "./components/Loading";
import Dashboard from "./components/pages/Dashboard";
import Routines from "./components/pages/Routines";

function App() {
  return (
    <Router>
      <div className="App font-display min-h-screen bg-gray-200">
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/loading" component={Loading} />
        <Route path="/" exact component={Dashboard} />
        <Route path="/routines" component={Routines} />
      </div>
    </Router>
  );
}

export default App;
