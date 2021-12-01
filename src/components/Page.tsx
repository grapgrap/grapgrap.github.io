import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

type Props = {
  data: {
    mdx: {
      id: string;
      body: string;
    };
  };
};

export default function PageTemplate({ data }: Props) {
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
