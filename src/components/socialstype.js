import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function SocialsType({ name, img }) {
  return (
    <Link href="/" className="socials-type">
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
  img: PropTypes.elementType.isRequired,
};

export default SocialsType;
