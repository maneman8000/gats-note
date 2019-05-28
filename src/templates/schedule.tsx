import * as React from 'react';
import { FC, ClassAttributes } from 'react';
import { graphql, PageRendererProps } from 'gatsby';
import { Container, Paper, Grid } from '@material-ui/core/';
import EdgesContent from '../entity/EdgesContent';
import ScheduleContent, { queryAll } from '../entity/ScheduleContent';
import Layout from '../layouts/Layout';
import Schedule from '../components/Schedule';
import ScheduleLinkList from '../components/ScheduleLinkList';

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
            <Grid item xs={12}>
              <ScheduleLinkList location={location} />
            </Grid>
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
  query TemplateScheduleQuery($dateFrom: Date!, $dateTo: Date!) {
    allContentfulSchedule(
      limit: 100
      sort: { fields: [date], order: ASC }
      filter: { date: { gte: $dateFrom, lte: $dateTo } }
    ) {
      edges {
        node {
          id
          date
          title
          body {
            id
            childMarkdownRemark {
              html
              htmlAst
            }
          }
          image {
            file {
              url
            }
            fluid(maxWidth: 600) {
              src
            }
          }
        }
      }
    }
  }
`;
