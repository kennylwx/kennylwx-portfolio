import React from 'react';
import { graphql } from 'gatsby';
import ReactTimeAgo from 'react-time-ago';
import Layout from '../components/layout';
import '../styles/blog.scss';

function Template({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <div className="blog-container">
        <div className="blog-post">
          <h1 className="blog-title">{post.frontmatter.title}</h1>
          <div className="blog-info">
            <h4 className="blog-info-author">
              {`${post.frontmatter.author} `}
              <span>&#8226;</span>
              {' '}
              <ReactTimeAgo date={new Date(post.frontmatter.date)} />
            </h4>
          </div>
          <div className="blog-text">
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
    </Layout>

  );
}

export default Template;

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path } }){
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`;
