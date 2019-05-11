import * as React from 'react';
import { FC, ClassAttributes } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { navigate } from 'gatsby-link';
import styled from '@emotion/styled';

interface Props {
  open: boolean;
  onClose: () => void;
}

const Root = styled('div')({
  width: `200px`,
});

const MyDrawer: FC<ClassAttributes<HTMLElement> & Props> = ({ open, onClose }) => {
  const onClick = (to: string) => {
    return () => {
      onClose();
      navigate(to);
    };
  };
  return (
    <Drawer variant={'temporary'} open={open} onClick={() => onClose()}>
      <Root>
        <List>
          <ListItem button onClick={onClick('/')}>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={onClick('/grid')}>
            <ListItemText>Grid</ListItemText>
          </ListItem>
        </List>
      </Root>
    </Drawer>
  );
};

export default MyDrawer;
