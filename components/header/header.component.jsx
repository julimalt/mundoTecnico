import Head from "next/head";

const Header = (props) => (
    <Head>
        <title>{props.title}</title>
        <meta name="author" content="Julieta M. Altamirano" />
        <meta name="description" content={`${props.content}`} key="title" />
        <meta name="owner" content="Mundo Técnico" />
    </Head>
);

export default Header;
