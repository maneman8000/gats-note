import * as React from 'react';
import { FC, ClassAttributes, useContext } from 'react';
import { context as StateContext } from '../context/state';
import styled from '@emotion/styled';
import { Typography } from '@material-ui/core/';

interface Props {}

const Footer: FC<ClassAttributes<HTMLElement> & Props> = ({}) => {
  const theme = useContext(StateContext).state.theme;
  const Root = styled('div')({
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(6),
    padding: theme.spacing(4),
  });

  return (
    <Root>
      <Typography color="textSecondary">footer</Typography>
    </Root>
  );
};

export default Footer;
