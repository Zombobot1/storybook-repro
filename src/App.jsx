import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export const App = () => (
  <ThemeProvider theme={theme}>
    <Button>Primary</Button>
    <Button color='secondary'>Secondary</Button>
  </ThemeProvider>
);
