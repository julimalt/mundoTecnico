import { UnderConstructionTitle } from "./UnderConstruction.styles";

const UnderConstruction = ({ header = () => {} }) => {
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
};

export default UnderConstruction;
