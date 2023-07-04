import React from 'react';
import Home from 'views/Home';
import About from 'Components/About/About.js';
import Deals from 'Components/Deals/Deals.js';
import NavbarC from 'Components/global/Layout/Navbar/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavbarC />
      
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/deals" element={<Deals />} />
        </Routes>
    </div>
  );
}

export default App;
