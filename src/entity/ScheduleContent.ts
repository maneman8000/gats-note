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
