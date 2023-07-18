import * as React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { EmotionCache, CacheProvider } from "@emotion/react";
import createEmotionCache from "../lib/createEmotionCache";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "../components/layout/main";
import theme from "../lib/theme";
import ScrollObserver from "../lib/scroll_observer";

interface CustomAppProps extends AppProps {
  emotionCache: EmotionCache;
}

const clientEmotionCache = createEmotionCache();

const Website: React.FC<CustomAppProps> = ({
  Component,
  pageProps,
  emotionCache = clientEmotionCache,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={emotionCache}>
        <CssBaseline />
        <ScrollObserver>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ScrollObserver>
      </CacheProvider>
    </ThemeProvider>
  );
};

export default Website;
