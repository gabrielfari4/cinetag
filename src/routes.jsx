import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";
import Rodape from "./components/Rodape";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import { FavoritosProvider } from "./context/FavoritosProvider";
import Player from "./pages/Player";
import NaoEncontrada from "./pages/NaoEncontrada";
import Base from "./pages/Base";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index element={<Inicio />} />
                    <Route path="favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NaoEncontrada />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
