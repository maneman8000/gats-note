import { graphql } from 'gatsby';

interface ScheduleLink {
  id: string;
  path: string;
  name: string;
}

export default ScheduleLink;

export const query = graphql`
  fragment ScheduleLinkFields on ScheduleLink {
    id
    path
    name
  }
`;
