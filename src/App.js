/* global gapi */
import React,{ Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SelectSource from './Components/SelectSource';
import { GoogleLogin } from "@react-oauth/google";

function App() {
 
  return (
    <div className="App">
      <SelectSource />
      {/* <GoogleLogin onSuccess={responseMessage}  /> */}
    </div>
  );
}
export default App;
