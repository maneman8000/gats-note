import { MuiTheme } from 'material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export type Theme = MuiTheme;

export const initTheme = createMuiTheme;

import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import { darken } from '@material-ui/core/styles/colorManipulator';

export const themeInitialState = {
  direction: 'ltr',
  palette: {
    type: 'light',
    primary: {
      main: indigo[300],
    },
    secondary: {
      // Darken so we reach the AA contrast ratio level.
      main: darken(pink.A400, 0.08),
    },
  },
};
