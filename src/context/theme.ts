import { Consumer as C, createContext } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiTheme } from 'material-ui/styles';

export const theme = createMuiTheme();
export const context = createContext<MuiTheme>(theme);
export const Provider = context.Provider;
export const Consumer = context.Consumer as C<MuiTheme>;
