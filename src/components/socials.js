import React from 'react';
import SocialsType from './socialstype';
import TwitterIcon from '../assets/icons/twitter.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';
import GithubIcon from '../assets/icons/github.svg';
import ResumeIcon from '../assets/icons/pdf.svg';

function Socials() {
  const arr = [
    {
      id: 0,
      name: 'Resume',
      img: <ResumeIcon />,
      link: '/',

    },
    {
      id: 1,
      name: 'LinkedIn',
      img: <LinkedinIcon />,
      link: 'https://www.linkedin.com/in/kennylwx/',
    },
    {
      id: 2,
      name: 'Twitter',
      img: <TwitterIcon />,
      link: 'https://twitter.com/kennylwx',
    },
    {
      id: 3,
      name: 'Github',
      img: <GithubIcon />,
      link: 'https://github.com/kennylwx',
    },
  ];

  return (
    <div className="socials">
      <div className="socials-container">
        {
        arr.map((soc) => (
          <SocialsType
            key={soc.id}
            name={soc.name}
            img={soc.img}
            link={soc.link}
          />
        ))
      }
      </div>
    </div>
  );
}

export default Socials;
