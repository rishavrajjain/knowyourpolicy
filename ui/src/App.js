import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import PrivateRoute from "./routing/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";


function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard}></PrivateRoute>
        <PrivateRoute exact path="/account" component={Account}></PrivateRoute>
      </BrowserRouter>

    </div>
  );
}

export default App;
