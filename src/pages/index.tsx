import React from 'react';
import Layout from '../layouts/Layout';
import Link from 'gatsby-link';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const Home: React.FC<React.ClassAttributes<HTMLElement> & Props> = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>
      Welcome to your new <strong>{data.site.siteMetadata.title}</strong> site.
    </p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default Home;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
