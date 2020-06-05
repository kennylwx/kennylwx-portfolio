import React from 'react';
import PropTypes from 'prop-types';
import SocialsType from './socialstype';
import TwitterIcon from '../assets/icons/twitter.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';
import GithubIcon from '../assets/icons/github.svg';
import ResumeIcon from '../assets/icons/pdf.svg';

// eslint-disable-next-line no-unused-vars
function Socials({ title }) {
  const arr = [
    {
      name: 'Resume',
      img: <ResumeIcon />,
    },
    {
      name: 'LinkedIn',
      img: <LinkedinIcon />,
    },
    {
      name: 'Twitter',
      img: <TwitterIcon />,
    },
    {
      name: 'Github',
      img: <GithubIcon />,
    },
  ];


  return (
    <div className="socials">
      {
        arr.map((soc) => (
          <SocialsType
            name={soc.name}
            img={soc.img}
          />
        ))
      }
    </div>
  );
}

Socials.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Socials;
