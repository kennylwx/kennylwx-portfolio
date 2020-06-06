import React from 'react';
import {
  Link,
  useStaticQuery,
  graphql,
} from 'gatsby';
import PropTypes from 'prop-types';
import UpdatesType from './updatestype';


function Updates({ title, num }) {
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
              }
              excerpt(format: PLAIN)
            }
          }
        }
      } 
    `,
  );

  // pageQuery.allMarkdownRemark.edges.map((post) => (
  //   <div key={post.node.id}>
  //     <h3>{ post.node.frontmatter.author }</h3>
  //     <small>
  //       Posted by&nbsp;
  //       { post.node.frontmatter.author }
  //       &nbsp;on&nbsp;
  //       { post.node.frontmatter.date }
  //       <br />
  //       <br />
  //       <Link to={post.node.frontmatter.path}>Read More</Link>
  //       <br />
  //       <br />
  //       <hr />
  //     </small>
  //   </div>
  // ));

  return (
    <div className="updates">
      <div className="updates-title">
        {title}
      </div>
      <div className="updates-container">
        {
          pageQuery.allMarkdownRemark.edges.slice(0, num).map((post) => (
            <UpdatesType
              key={post.node.id}
              title={post.node.frontmatter.title}
              desc={post.node.excerpt}
              date={post.node.frontmatter.date}
              path={post.node.frontmatter.path}
            />
          ))
        }
      </div>
      <Link href="/" className="updates-more">
        more
      </Link>
    </div>
  );
}

Updates.propTypes = {
  title: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
};

export default Updates;
