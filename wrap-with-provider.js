import React from 'react';
import ThemeProvider from './src/layouts/ThemeProvider';
import { Provider as StateProvider } from './src/context/state';

export default ({ element }) => {
  return (
    <StateProvider>
      <ThemeProvider>
        {element}
      </ThemeProvider>
    </StateProvider>
  );
};