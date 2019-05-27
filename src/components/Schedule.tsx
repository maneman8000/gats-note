import * as React from 'react';
import { FC, ClassAttributes, useContext, createElement } from 'react';
import { context as StateContext } from '../context/state';
import ScheduleContent from '../entity/ScheduleContent';
import { Grid, Typography, Link } from '@material-ui/core/';
import styled from '@emotion/styled';
import { format } from 'date-fns';
import jaLocale from 'date-fns/locale/ja';
import rehypeReact from 'rehype-react';
import brown from '@material-ui/core/colors/brown';

interface Props {
  data: ScheduleContent;
}

const renderAst = new rehypeReact({
  createElement: createElement,
  components: { p: Typography, a: Link },
}).Compiler;

const Schedule: FC<ClassAttributes<HTMLElement> & Props> = ({ data }) => {
  const theme = useContext(StateContext).state.theme;
  const Root = styled('div')({
    margin: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderBottom: `dotted 1px ${theme.palette.secondary.light}`,
  });
  const Img = styled('img')({
    maxWidth: `100%`,
  });
  const Title = styled(Typography)({
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
  }) as typeof Typography;

  // TODO: dirty
  const br = (hast: any) => {
    const br_i = (hast: any) => {
      let ch = hast.children;
      if (!ch) return;
      let i = 0;
      while (ch[i]) {
        if (ch[i].type === 'text') {
          const vv = ch[i].value.split('\n');
          if (vv.length > 1) {
            let newNodes = vv
              .map((v: string) => {
                return [{ type: 'text', value: v }, { type: 'element', tagName: 'br' }];
              })
              .flat();
            newNodes.pop();
            ch.splice(i, 1, ...newNodes);
            i += newNodes.length;
            continue;
          }
        }
        i += 1;
      }
      hast.children.forEach((h: any) => br_i(h));
    };
    let newHast = Object.assign({}, hast);
    br_i(newHast);
    return newHast;
  };

  return (
    <Root>
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
        <Grid item>
          <Title variant="h6">
            {format(new Date(data.date), 'M/D (dd)', { locale: jaLocale })} {data.title}
          </Title>
          {data.body ? renderAst(br(data.body.childMarkdownRemark.htmlAst)) : ''}
        </Grid>
      </Grid>
    </Root>
  );
};

export default Schedule;
