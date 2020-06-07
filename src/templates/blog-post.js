import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ReactTimeAgo from 'react-time-ago';
import Layout from '../components/layout';
import '../styles/blog-post.scss';
import GithubIcon from '../assets/icons/github.svg';
import LinkIcon from '../assets/icons/link.svg';


function Template({ data }) {
  const post = data.markdownRemark;

  const renderRepoLink = () => {
    if (post.frontmatter.repoLink) {
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={post.frontmatter.repoLink}
          className="blog-info-links-1"
        >
          <GithubIcon />
        </a>
      );
    }

    return null;
  };

  const renderProjectLink = () => {
    if (post.frontmatter.projectLink) {
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={post.frontmatter.projectLink}
          className="blog-info-links-2"
        >
          <LinkIcon />
        </a>
      );
    }
    return null;
  };

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
            <div className="blog-info-links">
              {renderRepoLink()}
              {renderProjectLink()}
            </div>
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

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        projectLink: PropTypes.string,
        repoLink: PropTypes.string,
      }),
    }),
  }).isRequired,
};

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
        projectLink
        repoLink
      }
    }
  }
`;
