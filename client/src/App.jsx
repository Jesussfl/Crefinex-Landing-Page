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
import { QueryClientProvider, QueryClient, useQueryClient } from "react-query";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";

const MAX_AGE = 24000;

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnMount: false,
         refetchOnWindowFocus: false,
         refetchOnReconnect: false,
         staleTime: 0,
         retry: true,
         cacheTime: MAX_AGE,
      },
   },
});

const localStoragePersistor = createWebStoragePersistor({
   storage: window.localStorage,
});

persistQueryClient({
   queryClient,
   persistor: localStoragePersistor,
});

function App() {
   return (
      <div className="App">
         <QueryClientProvider client={queryClient}>
            <Router>
               <Routes>
                  <Route path="/" element={<Navigate to="/inicio" />} />
                  <Route path="/inicio" element={<Home />} />
                  <Route path="/inicio/cursos" element={<Home />} />
                  <Route path="/inicio/compra" element={<Checkout />} />
               </Routes>
            </Router>
         </QueryClientProvider>
      </div>
   );
}

export default App;
