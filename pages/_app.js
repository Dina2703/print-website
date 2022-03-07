import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../styles/createEmotionCache";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "/styles/globals.css";
import theme from "../styles/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          <a href="https://www.fontspace.com/category/logo">
            <img
              src="https://see.fontimg.com/api/renderfont4/8Ma60/eyJyIjoiZnMiLCJoIjo5OCwidyI6MjAwMCwiZnMiOjQ5LCJmZ2MiOiIjQ0NFNkU3IiwiYmdjIjoiIzQ1M0UzRSIsInQiOjF9/WWFzbWluYSBwcmludA/aquire-bold.png"
              alt="Logo fonts"
            />
          </a>
        </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
