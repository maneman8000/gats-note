interface ScheduleContent {
  id: string;
  date: string;
  title: string;
  body?: {
    id: string;
    childMarkdownRemark: {
      html: string;
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

// TODO: 途中
export const queryAll = (name: string, options: string) => `
  query ${name}($dateFrom: Date!, $dateTo: Date!) {
    allContentfulSchedule(
      limit: 100
      ${options}
    ) {
      edges {
        node {
          id
          date
          title
          body {
            id
            childMarkdownRemark {
              html
              htmlAst
            }
          }
          image {
            file {
              url
            }
            fluid(maxWidth: 600) {
              src
            }
          }
        }
      }
    }
  }
`;
