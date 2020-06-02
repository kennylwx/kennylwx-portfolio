import React from 'react';
import {
  useStaticQuery,
  graphql,
  Link,
} from 'gatsby';

function BlogPage() {
  const pageQuery = useStaticQuery(
    graphql`
      query BlogIndexQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                author
                date
                path
                title
              }
              
            }
          }
        }
      }
    `,
  );

  return (
    <div>
      <h1>Latest Posts</h1>
      <p>This is a sample site for the Gatsby crash coourse</p>
      {pageQuery.allMarkdownRemark.edges.map((post) => (
        <div key={post.node.id}>
          <h3>{ post.node.frontmatter.author }</h3>
          <small>
            Posted by&nbsp;
            { post.node.frontmatter.author }
            &nbsp;on&nbsp;
            { post.node.frontmatter.date }
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <hr />
          </small>
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
