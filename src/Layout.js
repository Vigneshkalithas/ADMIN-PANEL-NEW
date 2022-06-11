import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "./Sidebar/SideBar";
import { Navbar }from "./Navbar/Navbar"

export function Layout() {

  return (
   
     <div className="App-child">
        <div><SideBar/></div>
          <div className="top-nav">
          <div>
          <Navbar/>
          </div>
          <div className="bgColourApp">
         <Outlet/>
          </div>
        </div>
      </div>
    
  );
}