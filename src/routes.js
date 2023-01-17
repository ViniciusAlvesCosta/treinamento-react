import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Componentes/menu";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";


function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
