import * as React from 'react';
import { FC, ClassAttributes, ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import '../styles/global.scss';

interface Props {
  location: {
    pathname: string;
  };
  title: string;
  children: ReactElement<HTMLElement>[] | ReactElement<HTMLElement>;
}

const Layout: FC<ClassAttributes<HTMLElement> & Props> = ({ location, title, children }) => (
  <div>
    <Helmet>
      <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Helmet>
    <CssBaseline />
    <Header pathname={location.pathname} />
    <div id="netlify-modal" />
    {children}
  </div>
);

export default Layout;
