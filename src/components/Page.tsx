import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export default function PageTemplate({ data }) {
  return <MDXRenderer>{data.mdx.body}</MDXRenderer>;
}

export const query = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
    }
  }
`;
