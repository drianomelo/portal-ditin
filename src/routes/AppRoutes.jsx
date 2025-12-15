import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Projeto } from "../pages/Projeto";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/:id" element={<Projeto />} />
      </Routes>
    </BrowserRouter>
  );
};
