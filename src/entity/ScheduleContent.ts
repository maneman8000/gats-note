import { graphql } from 'gatsby';

interface ScheduleContent {
  id: string;
  date: string;
  title: string;
  body?: {
    id: string;
    childMarkdownRemark: {
      htmlAst: any;
    };
  };
  image?: {
    file: {
      url: string;
    };
    fluid: {
      src: string;
    };
  };
}

export default ScheduleContent;

export const query = graphql`
  fragment ScheduleContentFields on ContentfulSchedule {
    id
    date
    title
    body {
      id
      childMarkdownRemark {
        htmlAst
      }
    }
    image {
      file {
        url
      }
      fluid(maxWidth: 480) {
        src
      }
    }
  }
`;
