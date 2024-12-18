import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Jujutsu from "./pages/Jujutsu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />}/>
          <Route path="/jujutsu-kaisen" element={<Jujutsu />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
