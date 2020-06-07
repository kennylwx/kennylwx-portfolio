import React from 'react';
import {
  useStaticQuery,
  graphql,
} from 'gatsby';
import '../styles/blog-list.scss';
import Layout from '../components/layout';
import UpdatesType from '../components/updatestype';

function BlogList() {
  const pageQuery = useStaticQuery(
    graphql`
      query BlogIndexAllQuery {
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

  const title = 'Blog Posts';

  return (
    <Layout>
      <div className="blog-list">
        <h1 className="blog-list-title">
          {title}
        </h1>
        <div className="blog-list-container">
          {
          pageQuery.allMarkdownRemark.edges.map((post) => (
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
    </Layout>

  );
}

export default BlogList;
