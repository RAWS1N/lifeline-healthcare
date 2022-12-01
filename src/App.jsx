import React from "react";
import { Home,SpecialService,Isolation,Product,ICUService,CorporateService } from "./Pages";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import "./index.css";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/specialized" element={<SpecialService/>}/>
      <Route path="/home-isolation" element={<Isolation/>}/>
      <Route path="/on-rent" element={<Product/>}/>
      <Route path="/icuathome" element={<ICUService/>}/>
      <Route path="/corporate" element={<CorporateService/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>
    
  );
}

export default App;
