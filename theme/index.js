import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";
import palette from './palette';
import typography from './typography';

// Create a theme instance.
let theme = createTheme({
  palette,
  typography
});

// const Theme = responsiveFontSizes(theme);

export default theme;

