import React, { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { StylesProvider } from "@mui/styles";
import { themeCreator } from "./base";

export const ThemeContext = React.createContext();

const ThemeProviderWrapper = function (props) {
  const curThemeName = localStorage.getItem("appTheme") || "CenterfinTheme";
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName) => {
    localStorage.setItem("appTheme", themeName);
    _setThemeName(themeName);
  };

  return (
    <StylesProvider injectFirst>
      {/* <CacheProvider value={cacheRtl}> */}
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </ThemeContext.Provider>
      {/* </CacheProvider> */}
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
