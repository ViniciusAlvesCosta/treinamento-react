import PaginaPadrao from "Componentes/PaginaPadrao";
import Rodape from "Componentes/rodape";
import ScrollToTop from "Componentes/ScrollToTop";
import NaoEncontrada from "paginas/NaoEncontrada";
import Post from "paginas/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Componentes/menu";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";


function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />}/>
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
