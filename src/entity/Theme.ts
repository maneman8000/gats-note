import { Theme as MuiTheme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export type Theme = MuiTheme;

export const initTheme = createMuiTheme;

import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import { darken } from '@material-ui/core/styles/colorManipulator';

export const themeInitialState = {
  palette: {
    primary: {
      main: indigo[300],
    },
    secondary: {
      main: darken(pink.A400, 0.08),
    },
  },
};
