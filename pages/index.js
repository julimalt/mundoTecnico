import Head from "next/head";
import { UnderConstructionTitle } from "../public/styles/index.styles";

function Home() {
    const header = () => {
        return (
            <Head>
                <title>Mundo Técnico - En construcción</title>
                <meta name="author" content="Owl Consulting" />
                <meta name="description" content="Home Mundo Técnico" key="title" />
                <meta name="owner" content="Mundo Récnico" />
            </Head>
        );
    };

    return (
        <div>
            {header()}
            <main>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgb(21, 25, 33)",
                        width: "100vw",
                        height: "100vh",
                    }}
                >
                    <img alt="Logo Mundo Técnico" src="/img/logo_nombre.png" style={{ maxHeight: "55vh" }} />
                    <UnderConstructionTitle>#EN CONSTRUCCIÓN</UnderConstructionTitle>
                </div>
            </main>
        </div>
    );
}

export default Home;
