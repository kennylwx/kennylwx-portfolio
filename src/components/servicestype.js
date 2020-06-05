import React from 'react';
import PropTypes from 'prop-types';
import CodeIcon from '../assets/icons/code.svg';


function ServicesType({ name, img }) {
  const renderIcon = () => {
    switch (img) {
      case 'code':
        return <CodeIcon />;
      default:
        return <CodeIcon />;
    }
  };

  return (
    <div className="services-type">
      <div className="services-type-img">
        {renderIcon(img)}
      </div>
      <div className="services-type-name">
        {name}
      </div>
    </div>
  );
}

ServicesType.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.oneOf(['code', 'design', 'cms', 'info', 'app', 'web']).isRequired,
};


export default ServicesType;
