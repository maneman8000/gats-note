import * as React from 'react';
import { FC, ClassAttributes, useContext } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { context as StateContext } from '../context/state';

const ThemeProvider: FC<ClassAttributes<HTMLElement>> = ({ children }) => {
  const theme = useContext(StateContext).state.theme;
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
