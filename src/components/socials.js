import React from 'react';
import SocialsType from './socialstype';

function Socials() {
  const arr = [
    {
      id: 0,
      name: 'quora',
      link: 'https://www.quora.com/profile/Kenny-Lee-74',

    },
    {
      id: 1,
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/kennylwx/',
    },
    {
      id: 2,
      name: 'twitter',
      link: 'https://twitter.com/kennylwx',
    },
    {
      id: 3,
      name: 'github',
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
