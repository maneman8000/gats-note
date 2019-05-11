import * as React from 'react';
import { FC, ClassAttributes, useState, useContext } from 'react';
import { context as StateContext } from '../context/state';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import _Typography from '@material-ui/core/Typography';
import _IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from '@emotion/styled';
import Drawer from './Drawer';

interface Props {
  title: string;
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

const Header: FC<ClassAttributes<HTMLElement> & Props> = ({ title }) => {
  const theme = useContext(StateContext).state.theme;
  const Margin = styled('div')(theme.mixins.toolbar);
  const [drawer, setDrawer] = useState(false);
  return (
    <Root>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <IconButton color="inherit" arial-label="Menu" onClick={() => setDrawer(!drawer)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={drawer} onClose={() => setDrawer(false)} />
      <Margin />
    </Root>
  );
};

export default Header;
