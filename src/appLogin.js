import React from "react";
import {useEffect } from "react";
//import logo from './logo.svg';
import './styleLogin.css';
import { Login } from "./Login";


function appLogin() {
  useEffect(() => {
    // instruction for when the page is first mounted
    console.log("Tiramisu")
  }, []);
  return (
    <div className="appLogin">
      <Login />
    </div>
  );
}

export default appLogin;