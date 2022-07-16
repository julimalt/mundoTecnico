import { useRouter } from "next/router";

import Header from "../components/header/header.component";
import NotFound from "../components/states/notFound/notFound.component";

const ErrorPage = () => {
    const router = useRouter();

    return (
        <>
            <Header title="Error - Página no encontrada" content="Mundo Técnico -  página no encontrada" />
            <NotFound />
        </>
    );
};

export default ErrorPage;
