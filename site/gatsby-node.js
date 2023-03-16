exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      events: allSanityEvent(sort: { startDate: ASC }) {
        nodes {
          endDate
          startDate
          id
          image {
            asset {
              gatsbyImageData(width: 350)
            }
          }
          name
          slug {
            current
          }
          location
          details {
            _key
            _type
            _rawChildren(resolveReferences: {maxDepth: 10})
          }
        }
      }
    }
  `);
  data.events.nodes.forEach((node) => {
    const slug = node.slug.current;
    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/eventTemplate.tsx'),
      context: { slug: slug },
    });
  });
};
