import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import SunIcon from '../assets/icons/sun.svg';
import MoonIcon from '../assets/icons/moon.svg';

const Header = ({ siteTitle }) => (
  <header
    className="header"
  >
    <h1 className="title">
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </h1>

    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label
          htmlFor="theme-checkbox"
        >
          <input
            type="checkbox"
            id="theme-checkbox"
            onChange={(e) => toggleTheme(e.target.checked ? 'light' : 'dark')}
            // checked={theme === 'light'}
            style={{
              display: 'none',
            }}
          />
          {theme === 'light' ? <SunIcon className="theme-icon" /> : <MoonIcon className="theme-icon" /> }
        </label>
      )}
    </ThemeToggler>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
