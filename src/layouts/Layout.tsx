import React, { FC, ClassAttributes } from 'react';
import { Provider as ThemeProvider, theme } from '../context/theme';
import Header from '../components/Header';
import '../styles/global.scss';

interface LayoutProps {
  location: {
    pathname: string;
  };
  children: ReactElement<HTMLElement>[];
}

const Layout: FC<ClassAttributes<HTMLElement> & LayoutProps> = ({ location, children }) => (
  <ThemeProvider value={theme}>
    <Header />
    {children}
  </ThemeProvider>
);

export default Layout;
