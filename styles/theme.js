import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { blueGrey, blue } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: blueGrey,
    secondary: blue,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
