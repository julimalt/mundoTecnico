import NavbarComponent from "../components/navbar/navbar";
import Footer from "../components/footer/footer.component";

import "bootstrap/dist/css/bootstrap.min.css";
import "glider-js/glider.min.css";
import "/public/styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NavbarComponent />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
