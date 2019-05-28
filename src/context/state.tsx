import * as React from 'react';
import { FC, ClassAttributes, Consumer as C, createContext, useReducer, Dispatch } from 'react';
import { reducer, Action } from '../reducer';
import { Theme, initTheme, themeInitialState } from '../entity/Theme';

export type State = {
  theme: Theme;
};

interface Context {
  dispatch: Dispatch<Action>;
  state: State;
}

const initialState = {
  theme: initTheme(themeInitialState),
};

export const context = createContext<Context>({ state: initialState, dispatch: _ => null });
export const Provider: FC<ClassAttributes<HTMLElement>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <context.Provider value={{ state, dispatch }}>{children}</context.Provider>;
};
export const Consumer = context.Consumer as C<Context>;
