import * as React from 'react';
import { FC, ClassAttributes } from 'react';
import { graphql, PageRendererProps } from 'gatsby';
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

const Home: FC<ClassAttributes<HTMLElement> & Props & PageRendererProps> = ({ data, location }) => {
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <h1>Hi people</h1>
      <p>
        Welcome to your new <strong>{data.site.siteMetadata.title}</strong> site.
      </p>
      <p>Now go build something great.</p>
      <Link to="/grid/">Go to Grid example</Link>
      <ul>
        {new Array(500).fill(null).map((_, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </Layout>
  );
};

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
