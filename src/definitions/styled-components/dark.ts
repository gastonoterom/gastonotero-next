// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports
import { common } from "./common";

const dark: DefaultTheme = {
  colors: {
    ...common.colors,
    toggleBorder: "#556678",
    toggleBackground: "#20232A",
    
    background: "#20232A",
    headerBg: "#20232A",
    cardsBg: "#1A1C22",

    titleColor: "#F4F9F9",
    hoverTitleColor: "#d0d0d0",

    textColor: "#E9ECEF",
    hoverTextColor: "#766161",

    dodgerBlue: "#0062CC",
    logo: "#F4F9F9",
  },
};

export { dark };
