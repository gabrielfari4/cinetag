import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";
import Rodape from "./components/Rodape";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import { FavoritosProvider } from "./context/FavoritosProvider";
import Player from "./pages/Player";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                    <Route path="/:id" element={<Player />} />
                </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    );
};

export default AppRoutes;
