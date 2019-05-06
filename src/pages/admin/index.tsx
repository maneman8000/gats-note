import * as React from 'react';
import { FC, ClassAttributes, useEffect, useContext } from 'react';
import { Router } from '@reach/router';
import * as netlifyIdentity from 'netlify-identity-widget';
import { Link, PageRendererProps } from 'gatsby';
import Layout from '../../layouts/Layout';
import ThemeEditor from './ThemeEditor';
import { Provider as IdentityProvider, useIdentity } from '../../context/identity';
import { context as StateContext } from '../../context/state';

const Home = () => <p>Home</p>;
const Settings = () => <p>Settings</p>;
const Billing = () => <p>Billing</p>;

const Admin: FC<ClassAttributes<HTMLElement> & PageRendererProps> = ({ location }) => {
  const identity = typeof window === 'undefined' ? null : useIdentity();
  const { state, dispatch } = useContext(StateContext);
  const isLoggedIn = (identity && identity.isLoggedIn) || !!state.adminUser;

  useEffect(() => {
    netlifyIdentity.init({
      container: '#netlify-modal', // defaults to document.body,
    });
    if (!netlifyIdentity.currentUser()) {
      netlifyIdentity.on('login', user => {
        netlifyIdentity.close();
        dispatch({ type: 'ADMIN_LOGIN', payload: netlifyIdentity.currentUser() });
      });
      netlifyIdentity.open();
    }
  });

  return (
    <Layout location={location}>
      <IdentityProvider value={identity}>
        {isLoggedIn ? (
          <div>
            <nav>
              <Link to="/admin">Home</Link> <Link to="/admin/settings">Settings</Link>{' '}
              <Link to="/admin/billing">Billing</Link>
            </nav>
            <Router>
              <ThemeEditor path="/admin/themeEditor" />
              <Home path="/admin" />
              <Settings path="/admin/settings" />
              <Billing path="/admin/billing" />
            </Router>
          </div>
        ) : (
          <div>
            <h1> hello! try logging in! </h1>
          </div>
        )}
      </IdentityProvider>
    </Layout>
  );
};

export default Admin;
