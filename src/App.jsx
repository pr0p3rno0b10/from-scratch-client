import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { useEffect, useState } from 'react';


import './index.sass';

import Portal from "./Portal";
import PricingPage from "./PricingPage";


// need to change roadmap and about

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portal/>}/>
        <Route path="/pricing" element={<PricingPage/>}/>
        <Route path="/roadmap" element={<Portal/>}/> 
        <Route path="/about" element={<Portal/>}/>
        <Route path="/signin" element={<Portal/>}/>
        <Route path="/signup" element={<Portal/>}/>
      </Routes>
    </Router>
  );
}

export default App;
