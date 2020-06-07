import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import ReactTimeAgo from 'react-time-ago';
import GithubIcon from '../assets/icons/github.svg';
import LinkIcon from '../assets/icons/link.svg';


function UpdatesType({
  title, desc, date, path, projectLink, repoLink,
}) {
  const renderRepoLink = () => {
    if (repoLink) {
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={repoLink}
          className="updates-type-links-1"
        >
          <GithubIcon />
        </a>
      );
    }

    return null;
  };

  const renderProjectLink = () => {
    if (projectLink) {
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={projectLink}
          className="updates-type-links-2"
        >
          <LinkIcon />
        </a>
      );
    }
    return null;
  };

  const renderLinks = () => {
    if (projectLink || repoLink) {
      return (
        <div className="updates-type-links">
          {renderRepoLink()}
          {renderProjectLink()}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="updates-type">
      <div className="updates-type-info">
        <div className="updates-type-date">
          <ReactTimeAgo date={new Date(date)} />
        </div>

        <div className="updates-type-container">
          <Link to={path} className="updates-type-details">
            <div className="updates-type-title">
              {title}
            </div>
            <div className="updates-type-desc">
              {desc}
            </div>
          </Link>
          {renderLinks()}
        </div>
      </div>

    </div>
  );
}

UpdatesType.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  repoLink: PropTypes.string,
  projectLink: PropTypes.string,
};

UpdatesType.defaultProps = {
  repoLink: '',
  projectLink: '',
};

export default UpdatesType;
