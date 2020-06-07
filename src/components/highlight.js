import React from 'react';
import {
  Link,
  useStaticQuery,
  graphql,
} from 'gatsby';
import PropTypes from 'prop-types';
import UpdatesType from './updatestype';


function Highlight({ title, postNum }) {
  const pageQuery = useStaticQuery(
    graphql`
      query BlogIndexHighlightQuery {
        allMarkdownRemark(
          sort: {
            fields: [frontmatter___date, frontmatter___title]
            order: DESC
          },
          filter: { 
            frontmatter: { 
              tags: { eq: "highlight" } 
            } 
          }
        ) {
          edges {
            node {
              id
              frontmatter {
                author
                date
                path
                title
                tags
                projectLink
                repoLink
              }
              excerpt(format: PLAIN)
            }
          }
        }
      }
    `,
  );


  return (
    <div className="highlight">
      <div className="highlight-title">
        {title}
      </div>
      <div className="highlight-container">
        {
          pageQuery.allMarkdownRemark.edges.slice(0, postNum).map((post) => (

            <UpdatesType
              key={post.node.id}
              title={post.node.frontmatter.title}
              desc={post.node.excerpt}
              date={post.node.frontmatter.date}
              path={post.node.frontmatter.path}
              projectLink={post.node.frontmatter.projectLink}
              repoLink={post.node.frontmatter.repoLink}
            />
          ))
        }
      </div>
    </div>
  );
}

Highlight.propTypes = {
  title: PropTypes.string.isRequired,
  postNum: PropTypes.number.isRequired,
};

export default Highlight;
