import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function SocialsType({ name, img, link }) {
  return (
    <Link
      href={link || '/'}
      className="socials-type"
    >
      <div className="socials-type-img">
        {img}
      </div>
      <div className="socials-type-name">
        {name}
      </div>
    </Link>
  );
}

SocialsType.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.element.isRequired,
  link: PropTypes.string,
};

SocialsType.defaultProps = {
  link: '',
};

export default SocialsType;
