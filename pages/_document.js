import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
    static getInitialProps({ renderPage }) {
        return renderPage();
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body style={{ height: "100%" }}>
                    <Main />
                </body>
                <NextScript />
            </Html>
        );
    }
}