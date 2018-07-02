import React, { Component } from 'react';
import Link from 'gatsby-link'

class IndexPage extends Component {
  render() {
    const links = [];
    console.log(this.props.data.allSitePage.edges.length)

    this.props.data.allSitePage.edges
      .filter(currNode => currNode.node.path.startsWith('/recipies'))
      .forEach(currNode => {
        links.push((
          <article key={currNode.node.id} >
            <Link to={currNode.node.path}>{currNode.node.jsonName}</Link>
          </article>
          ));
      });

    return (
      <div>
        <h1>The Recipies</h1>
        {links}

        <pre>{JSON.stringify(this.props, null, 3)}</pre>
      </div>
    );
  }
}

export default IndexPage

export const query = graphql`
  query BlogPostsQuery {
    allSitePage {
      edges {
        node {
          id
          path
          jsonName
        }
      }
    }
  }
`;