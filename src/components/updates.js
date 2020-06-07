import React from 'react';
import {
  Link,
  useStaticQuery,
  graphql,
} from 'gatsby';
import PropTypes from 'prop-types';
import UpdatesType from './updatestype';

function Updates({ title, postNum }) {
  const pageQuery = useStaticQuery(
    graphql`
      query BlogIndexQuery {
        allMarkdownRemark(
          sort: {
            fields: [frontmatter___date, frontmatter___title]
            order: DESC
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
    <div className="updates">
      <div className="updates-title">
        {title}
      </div>
      <div className="updates-container">
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
      <Link href="/blog-list" className="updates-more">
        more
      </Link>
    </div>
  );
}

Updates.propTypes = {
  title: PropTypes.string.isRequired,
  postNum: PropTypes.number.isRequired,
};

export default Updates;
