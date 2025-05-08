import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";
import Rodape from "./components/Rodape";
import Cabecalho from './components/Cabecalho';

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Cabecalho />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/favoritos" element={<Favoritos />} />
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;