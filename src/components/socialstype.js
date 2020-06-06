import React from 'react';
import PropTypes from 'prop-types';
import TwitterIcon from '../assets/icons/twitter.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';
import GithubIcon from '../assets/icons/github.svg';
import QuoraIcon from '../assets/icons/quora.svg';
import DocumentIcon from '../assets/icons/document.svg';


function SocialsType({ name, link }) {
  const renderIcon = () => {
    switch (name) {
      case 'twitter':
        return <TwitterIcon />;
      case 'linkedin':
        return <LinkedinIcon />;
      case 'quora':
        return <QuoraIcon />;
      case 'github':
        return <GithubIcon />;
      default:
        return <DocumentIcon />;
    }
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="socials-type"
    >
      <div className="socials-type-img">
        {renderIcon()}
      </div>
      <div className="socials-type-name">
        {name}
      </div>
    </a>
  );
}

SocialsType.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SocialsType;
