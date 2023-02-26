import { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
    palette: {
      mode: "light",
      primary: {
        main: "#ff7000",
      },
      secondary: {
        main: "#414141",
      },
      warning: {
        main: "#ff0000",
      },
    },
  };

const theme = createTheme(themeOptions);

export default theme