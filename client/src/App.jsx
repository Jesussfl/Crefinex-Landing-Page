import "./App.css";
import React from "react";

import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/" element={<Navigate to="/inicio" />} />
               <Route path="/inicio" element={<Home />} />
               <Route path="/inicio/cursos" element={<Home />} />
               <Route path="/inicio/compra" element={<Checkout />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
