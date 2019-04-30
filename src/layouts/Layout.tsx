import React, { FC, ClassAttributes, createElement } from 'react';
import ThemeProvider from './ThemeProvider';
import { Provider as StateProvider } from '../context/state';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import '../styles/global.scss';

interface LayoutProps {
  location: {
    pathname: string;
  };
  children: ReactElement<HTMLElement>[];
}

const Layout: FC<ClassAttributes<HTMLElement> & LayoutProps> = ({ location, children }) => (
  <StateProvider>
    <ThemeProvider>
      <CssBaseline />
      <Header />
      {children}
    </ThemeProvider>
  </StateProvider>
);

export default Layout;
