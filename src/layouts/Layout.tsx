import React from 'react';
import { Provider as ThemeProvider } from '../context/theme';
import '../styles/global.scss';

interface LayoutProps {
  location: {
    pathname: string;
  };
  children: ReactElement<HTMLElement>[];
}

const Layout: React.FC<React.ClassAttributes<HTMLElement> & LayoutProps> = ({ location, children }) => (
  <ThemeProvider>
    <div>{children}</div>
  </ThemeProvider>
);

export default Layout;
