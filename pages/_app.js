import React from "react";
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../theme/createEmotionCache';
import theme from "../theme"
import { wrapper } from '../_redux/store';
import Dreawe from "../_components/Drawer";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  // const router = useRouter()
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { pathname } = props.router;


  return(
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                  <Dreawe>
                    <Component {...pageProps} />
                  </Dreawe>
                </ThemeProvider>
            </CacheProvider>
  );
};

  MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
  };

  export default wrapper.withRedux(MyApp);
