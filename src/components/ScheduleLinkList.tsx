import * as React from 'react';
import { FC, ClassAttributes, useContext } from 'react';
import { context as StateContext } from '../context/state';
import EdgesContent from '../entity/EdgesContent';
import ScheduleLink from '../entity/ScheduleLink';
import { Grid, Button as _Button } from '@material-ui/core/';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

interface Props {
  data: EdgesContent<ScheduleLink>;
  location: Location;
}

const ScheduleLinkList: FC<ClassAttributes<HTMLElement> & Props> = ({ data }) => {
  const theme = useContext(StateContext).state.theme;
  const Root = styled('div')({
    margin: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderBottom: `dotted 1px ${theme.palette.secondary.light}`,
  });
  const Button = styled(_Button)({
    margin: theme.spacing(1),
  }) as typeof _Button;
  return (
    <Root>
      <Grid container>
        {data.edges.map(({ node }) => (
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
