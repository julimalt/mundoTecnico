import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/navbar";
import Intro from "./components/intro";
// import Cursos from "./components/cursos";
import Footer from "./components/footer";
import Propaganda from "./components/propaganda";
import Formulario from "./components/formulario";
import Login from "./components/login";
import RefrigeracionComercial from "./components/refrigeracionComercial";
import NotFound from "./components/404";
import Building from "./components/building";
import CursosCards from "./components/cursosCards";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route
          exact
          path="/"
          element={[<Intro />, <CursosCards />, <Propaganda />]}
        />
        <Route exact path="/contacto" element={<Formulario />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/refrigeracionComercial"
          element={<RefrigeracionComercial />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/buildingSite" element={<Building />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
