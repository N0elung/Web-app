import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Jujutsu from "./pages/Jujutsu";
import Productos from "./pages/Productos";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />}/>
          <Route path="/jujutsu-kaisen" element={<Jujutsu />}/>
          <Route path="/productos" element={<Productos />}/>
          <Route path="/blogs" element={<Blogs />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
