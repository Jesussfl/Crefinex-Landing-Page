import "./App.css";
import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { Overlay, Modal } from "./components/index";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import { queryClient, QueryClientProvider } from "./constants/queryClient";

function App() {
   return (
      <div className="App">
         <QueryClientProvider client={queryClient}>
            <Routes>
               <Route path="/" element={<Navigate to="/inicio" />} />
               <Route path="/inicio" element={<Home />}>
                  <Route
                     path="cursos"
                     element={
                        <Overlay>
                           <Modal />
                        </Overlay>
                     }
                  />
               </Route>
               <Route path="/inicio/cursos" element={<Home />} />
               <Route path="/inicio/compra" element={<Checkout />} />
            </Routes>
         </QueryClientProvider>
      </div>
   );
}

export default App;
