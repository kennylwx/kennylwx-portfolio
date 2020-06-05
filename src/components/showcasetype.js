import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import GithubIcon from '../assets/icons/github-inactive.svg';
import DocumentIcon from '../assets/icons/document.svg';

function ShowcaseType({
  title, desc, link1, link2,
}) {
  return (
    <div className="showcase-type">
      <Link href="/" className="showcase-type-info">
        <div className="showcase-type-title">
          {title}
        </div>
        <div className="showcase-type-desc">
          {desc}
        </div>
      </Link>
      <div className="showcase-type-links">
        <Link
          href={link1}
          className="showcase-type-links-1"
        >
          <GithubIcon />
        </Link>
        <Link
          href={link2}
          className="showcase-type-links-2"
        >
          <DocumentIcon />
        </Link>
      </div>
    </div>
  );
}

ShowcaseType.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link1: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired,
};


export default ShowcaseType;
