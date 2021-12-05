import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

type Data = {
  mdx: {
    id: string;
    body: string;
  };
};

export default function Post() {
  const { mdx } = useStaticQuery<Data>(graphql`
    query GetPostByID($id: String!) {
      mdx(id: { eq: $id }) {
        id
        body
      }
    }
  `);
  return <MDXRenderer>{mdx.body}</MDXRenderer>;
}
