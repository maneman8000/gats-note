import * as React from 'react';
import { FC, ClassAttributes } from 'react';
import { graphql, PageRendererProps } from 'gatsby';
import { Container, Paper, Grid } from '@material-ui/core/';
import EdgesContent from '../entity/EdgesContent';
import ScheduleContent from '../entity/ScheduleContent';
import Layout from '../layouts/Layout';
import Schedule from '../components/Schedule';

interface Props {
  data: {
    allContentfulSchedule: EdgesContent<ScheduleContent>;
  };
}

const Page: FC<ClassAttributes<HTMLElement> & PageRendererProps & Props> = ({ location, data }) => {
  return (
    <Layout location={location} title={`Schedule`}>
      <Container>
        <Paper>
          <Grid container>
            {data.allContentfulSchedule.edges.map(({ node }) => (
              <Grid item xs={12} key={node.id}>
                <Schedule data={node} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Layout>
  );
};

export default Page;

export const pageQuery = graphql`
  query ScheduleQuery {
    allContentfulSchedule {
      edges {
        node {
          id
          date
          title
          body {
            id
            childMarkdownRemark {
              html
            }
          }
          image {
            fluid(maxWidth: 480) {
              src
            }
          }
        }
      }
    }
  }
`;
