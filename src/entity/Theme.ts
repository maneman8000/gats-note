import { Theme as MuiTheme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export type Theme = MuiTheme;

export const initTheme = createMuiTheme;

import brown from '@material-ui/core/colors/brown';
import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { darken, lighten } from '@material-ui/core/styles/colorManipulator';

const primary = brown[50];
const secondary = blue[700];

export const themeInitialState = {
  palette: {
    primary: {
      dark: darken(primary, 0.07),
      main: primary,
      light: lighten(primary, 0.07),
      contrastText: blueGrey[900],
    },
    secondary: {
      dark: darken(secondary, 0.07),
      main: secondary,
      light: lighten(secondary, 0.07),
      contrastText: blueGrey[900],
    },
  },
};
