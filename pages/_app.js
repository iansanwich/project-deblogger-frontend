import { ThemeProvider } from "styled-components";
import Head from "next/head";

import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
