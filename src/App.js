import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/navbar";
import Intro from "./components/intro";
import Cursos from "./components/cursos";
import Footer from "./components/footer";
import Propaganda from "./components/propaganda";
import Formulario from "./components/formulario";

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
        {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
