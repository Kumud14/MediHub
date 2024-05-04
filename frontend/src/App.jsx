import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppContext from "./Context/Context.jsx";


import { Navbar, Footer, Home } from "./import-export/ImportExport.js";

function App() {



  return (
    <BrowserRouter>
      <AppContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
