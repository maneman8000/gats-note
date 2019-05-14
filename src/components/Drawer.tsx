import * as React from 'react';
import { FC, ClassAttributes } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
  const data = useStaticQuery(graphql`
    query DrawerQuery {
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
          {data.site.siteMetadata.navigations.map(nav => (
            <ListItem button onClick={onClick(nav.path)} key={nav.path}>
              <ListItemText>{nav.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Root>
    </Drawer>
  );
};

export default MyDrawer;
