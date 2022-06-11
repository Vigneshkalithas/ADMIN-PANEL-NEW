import "./App.css";
import { Route, Routes,} from "react-router-dom";
import React from "react";
import { Dashboard } from "./Dashboard";
import { Charts } from "./Charts";
import { Buttons } from "./Buttons";
import { Incards } from "./Incards";
import { BlankPage,ErrorPage, ForgetPassword,LoginPage, Pages, Register} from "./Pages";
import { Layout } from "./Layout";
import { Utilities , Border,Animation,Others, Colors} from "./Utilities";
import { Tables } from "./Tables";








function App() {
  return (
    <div className="App">
     
<Routes>

<Route path="/" element={<Layout/>}> 
<Route path="/" element={<Dashboard />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="components" element={<Components />} />
<Route path="utilities" element={<Utilities />} />
<Route path="pages" element={<Pages />} />
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

function Components() {
  return <div className="components">{/* <h1>Components</h1> */}</div>;
}



export default App;





