import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    type: 'dark',
  },
  overrides: {
      MuiButtonBase: {
          root: {
              justifyContent: 'flex-start',
          },
      },
      MuiButton: {
          root: {
              textTransform: undefined,
              padding: '12px 16px',
          },
          startIcon: {
              marginRight: 8,
          },
          endIcon: {
              marginLeft: 8,
          },
      },
  },
});

export default theme;