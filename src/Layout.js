import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
import { PrimarySearchAppBar }from "./PrimarySearchAppBar"

export function Layout() {

  return (
   
     <div className="App-child">
        <div><SideBar/></div>
          <div className="top-nav">
          <div>
          <PrimarySearchAppBar/>
          </div>
          <div className="bgColourApp">
         <Outlet/>
          </div>
        </div>
      </div>
    
  );
}