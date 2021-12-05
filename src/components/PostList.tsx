import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const isProduction = process.env.NODE_ENV !== 'development';

type Data = {
  allMdx: {
    edges: {
      node: {
        frontmatter: {
          date: string;
          title: string;
          draft: boolean;
        };
        slug: string;
        id: string;
        excerpt: string;
      };
    }[];
  };
};

export default function PostList() {
  const { allMdx } = useStaticQuery<Data>(graphql`
    query GetPostList {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              draft
            }
            slug
            id
            excerpt(truncate: true)
          }
        }
      }
    }
  `);

  const posts = allMdx.edges
    .filter(({ node }) => !isProduction || !node.frontmatter.draft)
    .map(({ node }) => {
      const { excerpt, frontmatter, id, slug } = node;
      return { ...frontmatter, id, slug, excerpt };
    });

  return (
    <Container>
      {posts.map(({ id, title, date, excerpt, slug }) => (
        <PostItem key={id}>
          <Link to={slug}>
            <h3>{title}</h3>
          </Link>
          <span>{date}</span>
          <p>{excerpt}</p>
        </PostItem>
      ))}
    </Container>
  );
}

const PostItem = styled.li``;

const Container = styled.ul``;
