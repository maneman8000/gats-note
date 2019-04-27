import React, { FC, ClassAttributes, useContext } from 'react';
import { context as ThemeContext } from '../context/theme';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
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
  const theme = useContext(ThemeContext);
  const Margin = styled('div')(theme.mixins.toolbar);
  return (
    <Root>
      <AppBar position="fixed">
        <ToolBar>
          <IconButton color="inherit" arial-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Title
          </Typography>
          <Button color="inherit">Login</Button>
        </ToolBar>
      </AppBar>
      <Margin />
    </Root>
  );
};

export default Header;
