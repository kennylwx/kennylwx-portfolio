import React from 'react';
import PropTypes from 'prop-types';

function ServicesType({ name, img }) {
  return (
    <div className="services-type">
      <div className="services-type-img">
        {img}
      </div>
      <div className="services-type-name">
        {name}
      </div>
    </div>
  );
}

ServicesType.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ServicesType;
