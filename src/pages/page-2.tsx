import React from 'react';
import Layout from '../layouts/Layout';
import Link from 'gatsby-link';

const SecondPage: React.FC<React.ClassAttributes<HTMLElement> & Props> = ({ data }) => (
  <Layout>
    <h1>second page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
