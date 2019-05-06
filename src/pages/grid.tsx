import * as React from 'react';
import { FC, ClassAttributes, useContext } from 'react';
import { PageRendererProps } from 'gatsby';
import { context as StateContext } from '../context/state';
import _Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from '@emotion/styled';
import Layout from '../layouts/Layout';

const Root = styled('div')({
  flexGrow: 1,
});

const GridPage: FC<ClassAttributes<HTMLElement> & PageRendererProps> = ({ location }) => {
  const theme = useContext(StateContext).state.theme;
  const Paper = styled(_Paper)({
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }) as typeof _Paper;

  return (
    <Layout location={location} title={`Grid`}>
      <Root>
        <Grid container spacing={40}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper>xs=12, sm=6, md=3</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper>xs=12, sm=6, md=3</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper>xs=12, sm=6, md=3</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper>xs=12, sm=6, md=3</Paper>
          </Grid>
        </Grid>
      </Root>
    </Layout>
  );
};

export default GridPage;
