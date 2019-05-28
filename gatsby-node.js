const path = require(`path`);
const dateFns = require('date-fns');
const { convertToTimeZone } = require('date-fns-timezone');
const format = d => dateFns.format(d, 'YYYY-MM-DD');

const current = (() => {
  const d = new Date();
  const tz = process.env.TIME_ZONE || 'UTC';
  return () => convertToTimeZone(d, { timeZone: tz });
})();

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const query = (dateFrom, dateTo) => `
    {
      allContentfulSchedule(sort: {
        fields: [date],
        order: ASC
      }, filter: {
        date: {
          gte: "${dateFrom}",
          lte: "${dateTo}"
        }
      }) {
        edges {
          node {
            id
            date
          }
        }
      }
    }
  `;

  const template = path.resolve(`./src/templates/schedule.tsx`);
  const currentYear = dateFns.getYear(current());
  for (let year = currentYear - 1; year <= currentYear + 1; year++) {
    for (let month = 1; month <= 12; month++) {
      const dateFrom = new Date(year, month, 1);
      const dateTo = dateFns.endOfMonth(dateFrom);
      graphql(query(format(dateFrom), format(dateTo))).then(result => {
        if (result.errors) {
          throw result.errors;
        }
        if (result.data.allContentfulSchedule.edges.length > 0) {
          const path = `/schedule/${dateFrom.getFullYear()}/${dateFrom.getMonth() + 1}`;
          createPage({
            path: path,
            component: template,
            context: {
              dateFrom: format(dateFrom),
              dateTo: format(dateTo),
            },
          });
        }
      });
    }
  }
};

let scheduleLinks = new Set();

exports.onCreateNode = ({ node, actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  if (node.internal.type === `ContentfulSchedule`) {
    const date = dateFns.startOfMonth(new Date(node.date));
    const linkData = {
      path: `/schedule/${date.getFullYear()}/${date.getMonth() + 1}`,
      name: `${date.getFullYear()}/${date.getMonth() + 1}`,
    };
    if (!scheduleLinks.has(linkData)) {
      scheduleLinks.add(linkData);
      createNode(
        Object.assign(
          {},
          {
            id: createNodeId(`schedule-link-${format(date)}`),
            parent: node.id,
            children: [],
            internal: {
              type: `ScheduleLink`,
              mediaType: `text/plain`,
              content: JSON.stringify(linkData),
              contentDigest: createContentDigest(linkData),
            },
          },
          linkData,
        ),
      );
    }
  }
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path === '/schedule/') {
    const oldPage = Object.assign({}, page);
    deletePage(oldPage);
    createPage({ ...page, context: { currentDate: format(dateFns.startOfMonth(dateFns.addMonths(current(), -1))) } });
  }
};
