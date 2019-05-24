import * as React from 'react';
import { FC, ClassAttributes, ChangeEvent, useState, useContext } from 'react';
import { context as StateContext } from '../context/state';
import { AppBar, Toolbar, Tabs, Tab, Hidden, IconButton } from '@material-ui/core';
import styled from '@emotion/styled';
import { Menu, Mail } from '@material-ui/icons';
import { useStaticQuery, graphql } from 'gatsby';
import { navigate } from 'gatsby-link';
import Drawer from './Drawer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faTwitter);
library.add(faFacebook);

interface Props {
  pathname: string;
}

const Root = styled('div')({
  flexGrow: 1,
});

const Left = styled('div')({
  flex: 1,
});

const MenuIconButton = styled(IconButton)({
  marginLeft: -12,
  marginRight: 20,
}) as typeof IconButton;

const SocialIconButton = styled(IconButton)({
  marginLeft: 4,
}) as typeof IconButton;

const Header: FC<ClassAttributes<HTMLElement> & Props> = ({ pathname }) => {
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

  return (
    <Root>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <Left>
            <Hidden mdUp>
              <MenuIconButton color="inherit" arial-label="Menu" onClick={() => setDrawer(!drawer)}>
                <Menu />
              </MenuIconButton>
            </Hidden>
            <Hidden smDown>
              <Tabs value={pathname} onChange={(_: ChangeEvent<{}>, v: string) => navigate(v)}>
                {data.site.siteMetadata.navigations.map((nav: any) => (
                  <Tab label={nav.name} value={nav.path} key={nav.path} />
                ))}
              </Tabs>
            </Hidden>
          </Left>
          <SocialIconButton color="inherit" arial-label="Mail">
            <Mail />
          </SocialIconButton>
          <SocialIconButton color="inherit" arial-label="Facebook">
            <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'facebook' }} />
          </SocialIconButton>
          <SocialIconButton color="inherit" arial-label="Twitter">
            <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'twitter' }} />
          </SocialIconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={drawer} onClose={() => setDrawer(false)} />
      <Margin />
    </Root>
  );
};

export default Header;
