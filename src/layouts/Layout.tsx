import React from 'react';
import '../styles/global.scss';

interface LayoutProps {
  location: {
    pathname: string;
  };
  children: ReactElement<HTMLElement>[];
}

const Layout: React.FC<React.ClassAttributes<HTMLElement> & LayoutProps> = ({ location, children }) => (
  <div>{children}</div>
);

export default Layout;
