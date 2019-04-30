import React, { FC, ClassAttributes, createElement } from 'react';
import { Router } from '@reach/router';
import Layout from '../../layouts/Layout';
import { Link, navigate } from 'gatsby';
import Login from './login';
import netflifyIdentity from 'netlify-identity-widget';

const Home = () => <p>Home</p>;
const Settings = () => <p>Settings</p>;
const Billing = () => <p>Billing</p>;

const Admin: FC<ClassAttributes<HTMLElement>> = ({ location }) => {
  const user = netflifyIdentity.currentUser();
  if (location.pathname !== '/admin/login' && !user && typeof window !== `undefined`) {
    navigate('/admin/login');
    return <div>Please Login...</div>;
  }
  return (
    <Layout>
      <nav>
        <Link to="/admin">Home</Link> <Link to="/admin/settings">Settings</Link>{' '}
        <Link to="/admin/billing">Billing</Link>
      </nav>
      <Router>
        <Login path="/admin/login" />
        <Home path="/admin" />
        <Settings path="/admin/settings" />
        <Billing path="/admin/billing" />
      </Router>
    </Layout>
  );
};

export default Admin;
