import { State } from './context/state';
import Theme, { initTheme } from './entity/Theme';

export type Action = {
  type: string;
  payload?: Theme;
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'THEME_CHANGE':
      return {
        ...state,
        theme: initTheme({ palette: action.payload }),
      };
    default:
      return state;
  }
};
