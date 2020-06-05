import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

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
        <Link href="/" className="showcase-type-links-1">
          {link1}
        </Link>
        <Link href="/" className="showcase-type-links-2">
          {link2}
        </Link>
      </div>
    </div>
  );
}

ShowcaseType.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link1: PropTypes.elementType.isRequired,
  link2: PropTypes.elementType.isRequired,
};

export default ShowcaseType;
