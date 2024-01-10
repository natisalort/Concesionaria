import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import { Inicio } from "../inicio/inicio";
import { Filter } from "./productos/filter";
import { Todos } from "./productos/todos";
import { Detalles } from "./detalles/detalles";
import { Showroom } from "./showroom/showroom";


export function App() {
  return (
    <div className="container-app">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/filter/:marca/:year" element={<Filter />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/detalles/:id" element={<Detalles />} />
        <Route path="/showroom" element={<Showroom />} />
      </Routes>
    </div>
  )
}
export default App;
