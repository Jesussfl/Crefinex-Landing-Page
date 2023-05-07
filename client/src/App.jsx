import "./App.css";
import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { Overlay, Modal } from "./components/index";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import { queryClient, QueryClientProvider } from "./constants/queryClient";
import { DataProvider } from "./context/DataContext";
function App() {
   return (
      <div className="App">
         <QueryClientProvider client={queryClient}>
            <Routes>
               <Route path="/" element={<Navigate to="/inicio" />} />
               <Route
                  path="/inicio"
                  element={
                     <DataProvider>
                        <Home />
                     </DataProvider>
                  }>
                  <Route
                     path="cursos/:title/:id"
                     element={
                        <Overlay>
                           <Modal />
                        </Overlay>
                     }
                  />
                  <Route
                     path="libros/:title/:id"
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
