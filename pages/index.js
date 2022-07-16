import { useRouter } from "next/router";

import Header from "../components/header/header.component";
import Intro from "../components/toBeSeparated/intro";
// import CursosCards from "../components/toBeSeparated/cursosCards";
import Propaganda from "../components/toBeSeparated/propaganda";
import CursosCarrousel from "../components/carrousels/cursosCarrousel/cursosCarrousel.component";

function HomePage() {
    const router = useRouter();

    return (
        <>
            <Header title="Home | Mundo Técnico" content="Mundo Técnico - Home" />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Intro router={router} />
                {/* <CursosCards /> */}
                <CursosCarrousel />
                <Propaganda />
            </div>
        </>
    );
}

export default HomePage;
