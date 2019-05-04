import * as React from 'react';
import { FC, ClassAttributes, useContext, useEffect, useState, memo } from 'react';
import { context as StateContext } from '../context/state';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import _Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import _IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fade from '@material-ui/core/Fade';
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
  const Margin = styled('div')(theme.mixins ? theme.mixins.toolbar : 8);

  const [state, setState] = useState({ scrolling: false, scrollTop: 0 });
  useEffect(() => {
    const onScroll = (e: Event) => {
      if (e.target) {
        setState({
          scrollTop: e.target.documentElement.scrollTop,
          scrolling: e.target.documentElement.scrollTop > state.scrollTop,
        });
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });
  return (
    <Root>
      <Fade in={!state.scrolling}>
        <AppBar position="fixed">
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
      </Fade>
      <Margin />
    </Root>
  );
};

// TODO: really memorized?
export default memo(Header, (prevProp, nextProp) => prevProp.scrolling === nextProp.scrolling);
