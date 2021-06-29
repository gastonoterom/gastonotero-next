// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports
import { common } from "./common";

const light: DefaultTheme = {
  colors: {
    ...common.colors,
    gradient: "#ffffff",
    toggleBorder: "#556678",
    toggleBackground: "#20232A",

    background: "#20232A",
    headerBg: "#20232A",
    cardsBg: "#1A1C22",

    titleColor: "#F4F9F9",
    hoverTitleColor: "#FFD8CC",

    textColor: "#E9ECEF",
    hoverTextColor: "#FFEEDB",

    dodgerBlue: "#0062CC",
    logo: "#F4F9F9",

  },
};

export { light };
