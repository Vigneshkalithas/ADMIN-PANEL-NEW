import "./App.css";
import { Route, Routes,} from "react-router-dom";
import React from "react";
import { Dashboard } from "./Dashboard/Dashboard";
import { Charts } from "./Charts/Charts";
import { Buttons } from "./Components/Buttons";
import { Incards } from "./Components/Incards";

import { BlankPage } from "./Pages/BlankPage";
import { ErrorPage } from "./Pages/ErrorPage";
import { ForgetPassword } from "./Pages/ForgetPassword";
import { LoginPage } from "./Pages/LoginPage";
import { Register } from "./Pages/Register";

import { Layout } from "./Layout";
import { Border } from "./Utilities/Border";
import { Animation } from "./Utilities/Animation";
import { Others } from "./Utilities/Others";
import { Colors } from "./Utilities/Colors";
import { Tables } from "./Tables/Tables";








function App() {
  return (
    <div className="App">
     
<Routes>

<Route path="/" element={<Layout/>}> 
<Route path="/" element={<Dashboard />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="charts" element={<Charts />} />
<Route path="tables" element={<Tables />} />
<Route path='buttons' element={<Buttons />} />
<Route path='incards' element={<Incards/>} />
<Route path="border" element={<Border className="head-forget"/>}> </Route>
<Route path="animation" element={<Animation className="head-forget"/>}> </Route>
<Route path="others" element={<Others className="head-forget"/>}> </Route>
<Route path="colors" element={<Colors className="head-forget"/>}> </Route>
<Route path="blankpages" element={<BlankPage />} />
<Route path="errorpages" element={<ErrorPage />} />
</Route>

<Route path="/forgetpassword" element={<ForgetPassword className="head-forget"/>}></Route>
<Route path="/login" element={<LoginPage className="head-forget"/>}> </Route>
<Route path="/register" element={<Register className="head-forget"/>}> </Route>


</Routes>
    </div>
        
  );
}





export default App;





