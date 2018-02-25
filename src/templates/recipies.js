import React from "react";
import Helmet from 'react-helmet';

export default (obj) => {
  const post = obj.data.markdownRemark;
  return (
    <div>
      <Helmet
        title={post.frontmatter.title}
      />
      <div>Hello RECIPY</div>
      <pre>
      {JSON.stringify(obj, null, 2)}
      </pre>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;