import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { blueGrey, cyan } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: blueGrey,
    secondary: cyan,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
