import React from 'react';
import Layout from '../layouts/Layout';
import _Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/styles';
import { MuiTheme } from 'material-ui/styles';

const Root = styled('div')({
  flexGrow: 1,
});

const Paper = styled(_Paper)({
  padding: 8 * 2,
  textAlign: 'center',
});

// const Paper = styled(_Paper)(theme => {
//   return {
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   };
// });

const Home: React.FC<React.ClassAttributes<HTMLElement>> = () => (
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

export default Home;
