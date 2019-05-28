import * as React from 'react';
import { FC, ClassAttributes, useContext } from 'react';
import { context as StateContext } from '../context/state';
import EdgesContent from '../entity/EdgesContent';
import ScheduleLink from '../entity/ScheduleLink';
import { Grid, Button as _Button } from '@material-ui/core/';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  location: Location;
}

interface Data {
  allScheduleLink: EdgesContent<ScheduleLink>;
}

const ScheduleLinkList: FC<ClassAttributes<HTMLElement> & Props> = ({ location }) => {
  const data: Data = useStaticQuery(graphql`
    query ScheduleLinkListQuery {
      allScheduleLink(sort: { fields: [path], order: ASC }) {
        edges {
          node {
            ...ScheduleLinkFields
          }
        }
      }
    }
  `);
  const theme = useContext(StateContext).state.theme;
  const Root = styled('div')({
    margin: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    borderBottom: `dotted 1px ${theme.palette.primary.dark}`,
  });
  const Button = styled(_Button)({
    margin: `${theme.spacing(1)}px 0`,
  }) as typeof _Button;
  return (
    <Root>
      <Grid container>
        {data.allScheduleLink.edges.map(({ node }) => (
          <Grid item xs={3} md={2} key={node.id}>
            <Button color="secondary" component={Link} to={node.path} disabled={location.pathname === node.path}>
              {node.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Root>
  );
};

export default ScheduleLinkList;
