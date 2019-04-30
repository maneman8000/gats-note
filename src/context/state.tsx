import React, { FC, ClassAttributes, createElement, Consumer as C, createContext, useReducer, Reducer } from 'react';
import { reducer, Action } from '../reducer';
import { Theme, initTheme, themeInitialState } from '../entity/Theme';

export type State = {
  theme: Theme;
};

interface Context {
  reducer?: Reducer<State, Action>;
  state: State;
}

const initialState = {
  theme: initTheme(themeInitialState),
};

export const context = createContext<Context>({ state: initialState });
export const Provider: FC<ClassAttributes<HTMLElement>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <context.Provider value={{ state, dispatch }}>{children}</context.Provider>;
};
export const Consumer = context.Consumer as C<Context>;
