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
const primaryText = brown[400];
const baseFont =
  '-apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif';

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
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: baseFont,
        lineHeight: '1.75',
      },
      h1: {
        fontFamily: baseFont,
        color: primaryText,
      },
      h2: {
        fontFamily: baseFont,
        color: primaryText,
      },
      h3: {
        fontFamily: baseFont,
        color: primaryText,
      },
      h4: {
        fontFamily: baseFont,
        color: primaryText,
      },
      h5: {
        fontFamily: baseFont,
        color: primaryText,
      },
      h6: {
        fontFamily: baseFont,
        color: primaryText,
      },
    },
    MuiLink: {
      root: {
        color: secondary,
      },
    },
  },
};
