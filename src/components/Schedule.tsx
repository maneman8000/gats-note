import * as React from 'react';
import { FC, ClassAttributes, useContext, createElement } from 'react';
import { context as StateContext } from '../context/state';
import ScheduleContent from '../entity/ScheduleContent';
import { Grid, Typography, Link } from '@material-ui/core/';
import styled from '@emotion/styled';
import { format } from 'date-fns';
import jaLocale from 'date-fns/locale/ja';
import rehypeReact from 'rehype-react';

interface Props {
  data: ScheduleContent;
}

const renderAst = new rehypeReact({
  createElement: createElement,
  components: { p: Typography, a: Link },
}).Compiler;

const Contents = styled(Grid)({
  width: `100%`,
  maxWidth: 570,
}) as typeof Grid;

const Schedule: FC<ClassAttributes<HTMLElement> & Props> = ({ data }) => {
  const theme = useContext(StateContext).state.theme;
  const Root = styled('div')({
    margin: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderBottom: `dotted 1px ${theme.palette.primary.dark}`,
  });
  const Img = styled('img')({
    maxWidth: `100%`,
  });
  const Title = styled(Typography)({
    marginBottom: `${theme.spacing(2)}px !important`,
  }) as typeof Typography;
  const SubTitle = styled(Typography)({
    marginBottom: `${theme.spacing(3)}px !important`,
  }) as typeof Typography;

  return (
    <Root>
      <Grid container>
        <Grid item xs={12}>
          <Title variant="h2">
            {format(new Date(data.date), 'M/D (dd)', { locale: jaLocale })} {data.title}
          </Title>
          <SubTitle color="textSecondary" variant="subtitle2">
            {format(new Date(data.date), 'YYYY/M/D', { locale: jaLocale })}
          </SubTitle>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="flex-start" spacing={4}>
            {data.image ? (
              <Grid item xs={12} sm={12} md={6}>
                <Link href={data.image.file.url} target="_blank" rel="noopener">
                  <Img src={data.image.fluid.src} />
                </Link>
              </Grid>
            ) : (
              ''
            )}
            <Contents item>{data.body ? renderAst(data.body.childMarkdownRemark.htmlAst) : ''}</Contents>
          </Grid>
        </Grid>
      </Grid>
    </Root>
  );
};

export default Schedule;
