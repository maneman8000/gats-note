import * as React from 'react';
import { FC, ClassAttributes, ChangeEvent, useState, useContext } from 'react';
import { context as StateContext } from '../context/state';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import _Typography from '@material-ui/core/Typography';
import _IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStaticQuery, graphql } from 'gatsby';
import { navigate } from 'gatsby-link';
import styled from '@emotion/styled';
import Drawer from './Drawer';

interface Props {
  title: string;
  pathname: string;
}

const Root = styled('div')({
  flexGrow: 1,
});

const Typography = styled(_Typography)({
  flex: 1,
}) as typeof _Typography;

const IconButton = styled(_IconButton)({
  marginLeft: -12,
  marginRight: 20,
}) as typeof _IconButton;

const Header: FC<ClassAttributes<HTMLElement> & Props> = ({ title, pathname }) => {
  const theme = useContext(StateContext).state.theme;
  const Margin = styled('div')(theme.mixins.toolbar);
  const [drawer, setDrawer] = useState(false);
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          navigations {
            name
            path
          }
        }
      }
    }
  `);
  /*
            <Typography variant="title" color="inherit">
            {title}
          </Typography>
*/
  return (
    <Root>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <IconButton color="inherit" arial-label="Menu" onClick={() => setDrawer(!drawer)}>
            <MenuIcon />
          </IconButton>
          <Tabs value={pathname} onChange={(_: ChangeEvent<{}>, v: string) => navigate(v)}>
            {data.site.siteMetadata.navigations.map(nav => (
              <Tab label={nav.name} value={nav.path} key={nav.path} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
      <Drawer open={drawer} onClose={() => setDrawer(false)} />
      <Margin />
    </Root>
  );
};

export default Header;
