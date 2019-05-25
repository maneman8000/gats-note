interface ScheduleContent {
  id: string;
  date: string;
  title: string;
  body?: {
    id: string;
    childMarkdownRemark: {
      html: string;
    };
  };
  image?: {
    fluid: {
      src: string;
    };
  };
}
export default ScheduleContent;
