import * as React from 'react';
import { FC, ClassAttributes, useContext } from 'react';
import { context as StateContext } from '../context/state';
import styled from '@emotion/styled';

interface Props {}

const Footer: FC<ClassAttributes<HTMLElement> & Props> = ({}) => {
  const theme = useContext(StateContext).state.theme;
  const Root = styled('div')({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing(6),
    padding: theme.spacing(4),
  });

  return <Root>footer</Root>;
};

export default Footer;
