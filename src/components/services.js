import React from 'react';
import propTypes from 'prop-types';
import ServicesType from './servicestype';

function Services({ title }) {
  const arr = [
    {
      id: 0,
      name: 'Branding',
      img: 'code',
    },
    {
      id: 1,
      name: 'UI/UX Design',
      img: 'design',
    },
    {
      id: 2,
      name: 'Information Architecture',
      img: 'info',
    },
    {
      id: 3,
      name: 'App/Web Development',
      img: 'app',
    },
  ];

  return (
    <div className="services">
      <div className="services-title">
        {title}
      </div>
      <div className="services-container">
        {
          arr.map((ser) => (
            <ServicesType
              key={ser.id}
              name={ser.name}
              img={ser.img}
            />
          ))
        }
      </div>
    </div>
  );
}

Services.propTypes = {
  title: propTypes.string.isRequired,
};

export default Services;
