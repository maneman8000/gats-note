import React, { FC, ClassAttributes, createElement, useEffect, useContext } from 'react';
import { Router } from '@reach/router';
import netflifyIdentity from 'netlify-identity-widget';
import { Link } from 'gatsby';
import Layout from '../../layouts/Layout';
import ThemeEditor from './ThemeEditor';
import { Provider as IdentityProvider, useIdentity } from '../../context/identity';
import { context as StateContext } from '../../context/state';

const Home = () => <p>Home</p>;
const Settings = () => <p>Settings</p>;
const Billing = () => <p>Billing</p>;

const Admin: FC<ClassAttributes<HTMLElement>> = ({ location }) => {
  const identity = typeof window === 'undefined' ? null : useIdentity();
  const { state, dispatch } = useContext(StateContext);
  const isLoggedIn = (identity && identity.isLoggedIn) || !!state.adminUser;

  useEffect(() => {
    netflifyIdentity.init({
      container: '#netlify-modal', // defaults to document.body,
    });
    if (!netflifyIdentity.currentUser()) {
      netflifyIdentity.on('login', user => {
        netlifyIdentity.close();
        dispatch({ type: 'ADMIN_LOGIN', payload: netflifyIdentity.currentUser() });
      });
      netflifyIdentity.open();
    }
  });

  return (
    <Layout>
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
