import React, { FC, ClassAttributes, useContext } from 'react';
import { context as StateContext } from '../context/state';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import _Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import _IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from '@emotion/styled';

const Root = styled('div')({
  flexGrow: 1,
});

const Typography = styled(_Typography)({
  flex: 1,
});

const IconButton = styled(_IconButton)({
  marginLeft: -12,
  marginRight: 20,
});

const Header: FC<ClassAttributes<HTMLElement>> = () => {
  const theme = useContext(StateContext).state.theme;
  const Margin = styled('div')(theme.mixins.toolbar);
  return (
    <Root>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <IconButton color="inherit" arial-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Margin />
    </Root>
  );
};

export default Header;
