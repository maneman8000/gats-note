import * as React from 'react';
import { FC, ClassAttributes, useContext } from 'react';
import { context as StateContext } from '../context/state';
import ScheduleContent from '../entity/ScheduleContent';
import { Grid, Typography, Link } from '@material-ui/core/';
import styled from '@emotion/styled';
import { format } from 'date-fns';
import jaLocale from 'date-fns/locale/ja';

interface Props {
  data: ScheduleContent;
}

const Img = styled('img')({
  maxWidth: `100%`,
});

const Schedule: FC<ClassAttributes<HTMLElement> & Props> = ({ data }) => {
  const theme = useContext(StateContext).state.theme;
  const Root = styled('div')({
    margin: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderBottom: `dotted 1px ${theme.palette.secondary.light}`,
  });
  // TODO:
  const br = (html: string) => {
    return html.replace(/\n/g, '<br />');
  };

  return (
    <Root>
      <Grid container justify="flex-start">
        {data.image ? (
          <Grid item xs={12} sm={12} md={8}>
            <Link href={data.image.file.url} target="_blank" rel="noopener">
              <Img src={data.image.fluid.src} />
            </Link>
          </Grid>
        ) : (
          ''
        )}
        <Grid item>
          <Typography>{format(new Date(data.date), 'MM/DD (dd)', { locale: jaLocale })}</Typography>
          <Typography>{data.title}</Typography>
          {data.body ? <div dangerouslySetInnerHTML={{ __html: br(data.body.childMarkdownRemark.html) }} /> : ''}
        </Grid>
      </Grid>
    </Root>
  );
};

export default Schedule;
