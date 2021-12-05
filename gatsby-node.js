const path = require('path');
const isProduction = process.env.NODE_ENV !== 'development';

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const Post = path.resolve('src/components/Post/Post.tsx');

  const { data, errors } = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY. MM. DD")
              title
              draft
            }
            slug
            id
          }
        }
      }
    }
  `);

  if (errors) {
    console.error(errors);
    throw errors;
  }

  data.allMdx.edges
    .filter(({ node }) => !isProduction || !node.frontmatter.draft)
    .forEach(({ node }) => {
      createPage({
        path: `/posts/${node.slug}/`,
        component: Post,
        slug: node.slug,
        context: {
          id: node.id,
        },
      });
    });
};
