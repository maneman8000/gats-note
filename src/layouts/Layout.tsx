import React, { FC, ClassAttributes, createElement } from 'react';
import { Helmet } from 'react-helmet';
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
  <div>
    <Helmet>
      <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Helmet>
    <CssBaseline />
    <Header />
    <div id="netlify-modal" />
    {children}
  </div>
);

export default Layout;
