import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import SunIcon from '../assets/icons/sun.svg';

const Header = ({ siteTitle }) => (
  <header
    className="header"
  >
    <h1 className="title">
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </h1>

    <SunIcon className="themeIcon" />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
