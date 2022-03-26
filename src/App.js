import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/navbar";
import Intro from "./components/intro";
import Cursos from "./components/cursos";
import Footer from "./components/footer";
import Propaganda from "./components/propaganda";
import Formulario from "./components/formulario";
import Login from "./components/login";
import NotFound from "./components/404";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route
          exact
          path="/"
          element={[<Intro />, <Cursos />, <Propaganda />]}
        />
        <Route exact path="/contacto" element={<Formulario />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
