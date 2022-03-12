import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavbarComponent from "./components/navbar";
import Intro from "./components/intro";
import Cursos from "./components/cursos";
import Footer from "./components/footer";
import Propaganda from "./components/propaganda";
// import Formulario from "./components/formulario";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Intro />
      <Cursos />
      <Propaganda />
      <Footer />
      {/* <Formulario /> */}
    </div>
  );
}

export default App;
