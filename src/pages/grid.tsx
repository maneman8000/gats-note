import React from 'react';
import { useContext } from 'react';
import Layout from '../layouts/Layout';
import { context as ThemeContext } from '../context/theme';
import _Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from '@emotion/styled';

const Root = styled('div')({
  flexGrow: 1,
});

const Home: React.FC<React.ClassAttributes<HTMLElement>> = () => {
  const theme = useContext(ThemeContext);
  const Paper = styled(_Paper)({
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  });

  return (
    <Layout>
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

export default Home;
