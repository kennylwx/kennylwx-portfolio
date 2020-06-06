import React from 'react';
import PropTypes from 'prop-types';

function SocialsType({ name, img, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="socials-type"
    >
      <div className="socials-type-img">
        {img}
      </div>
      <div className="socials-type-name">
        {name}
      </div>
    </a>
  );
}

SocialsType.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
};

export default SocialsType;
