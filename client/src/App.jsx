import "./App.css";
import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { Overlay, Modal } from "./components/index";
import { queryClient, QueryClientProvider } from "./constants/queryClient";

import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";

function App() {
   return (
      <div className="App">
         <QueryClientProvider client={queryClient}>
            <Routes>
               <Route path="/" element={<Navigate to="/inicio" />} />
               <Route path="/inicio" element={<Home />}>
                  <Route
                     path="cursos/:title/:type/:id"
                     element={
                        <Overlay>
                           <Modal />
                        </Overlay>
                     }
                  />
                  <Route
                     path="libros/:title/:type/:id"
                     element={
                        <Overlay>
                           <Modal />
                        </Overlay>
                     }
                  />
               </Route>

               <Route path="/inicio/compra" element={<Checkout />} />
            </Routes>
         </QueryClientProvider>
      </div>
   );
}

export default App;
