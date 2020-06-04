import React from 'react';
import propTypes from 'prop-types';
import ServicesType from './servicestype';
import BrandingIcon from '../assets/icons/code.svg';


function Services({ name }) {
  const arr = [
    {
      name: 'Branding',
      img: <BrandingIcon />,
    },
    {
      name: 'UI/UX Design',
      img: <BrandingIcon />,
    },
    {
      name: 'Content Management',
      img: <BrandingIcon />,
    },
    {
      name: 'Information Architecture',
      img: <BrandingIcon />,
    },
    {
      name: 'App Development',
      img: <BrandingIcon />,
    },
    {
      name: 'Web Development',
      img: <BrandingIcon />,
    },
  ];

  return (
    <div className="services">
      <div className="services-title">
        {name}
      </div>
      <div className="services-container">
        {
          arr.map((ser) => (
            <ServicesType
              name={ser.name}
            />
          ))
        }
      </div>
    </div>
  );
}

Services.propTypes = {
  name: propTypes.string.isRequired,
};

export default Services;
