/* eslint-disable @next/next/no-page-custom-font */
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import { CartContextProvider } from "@/components/CartContext";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
    margin: 0;
    padding: 0px;
    font-family: 'Roboto Mono', monospace;  }
  a {
    color: #000;
    text-decoration: none;
    list-style-type: none;
    letter-spacing: 0.5px;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Component {...pageProps} />
    </CartContextProvider>
  );
}
