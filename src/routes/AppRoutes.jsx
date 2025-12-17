import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Projeto } from "../pages/Projeto";
import { Team } from "../pages/Team";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/:id" element={<Projeto />} />
        <Route path="/equipes/:id" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
};
