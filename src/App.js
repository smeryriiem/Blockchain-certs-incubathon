//this page will contain all the routing (previous and added code)
import React from "react";
import {useEffect } from "react";
import { Route, Routes} from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";
import {appLogin} from "./appLogin";
import {homePage} from "./homePage";
import { home } from "./home"


function App() {
    useEffect(() => {
        // instruction for when the page is first mounted
        console.log("I'm in App.js")
      }, []);
    return(
    <div className="App">
    <Routes>
    <Route index element={<Navigate to="/" />} />
   
    <Route path="/" element={<appLogin />} />
    
     </Routes>
    </div>
    );


} 
export default App;