import React from 'react';
import PropTypes from 'prop-types';
import CodeIcon from '../assets/icons/code.svg';
import DesignIcon from '../assets/icons/design.svg';
import AppIcon from '../assets/icons/application.svg';
import AccessibilityIcon from '../assets/icons/accessibility.svg';
import DiagramIcon from '../assets/icons/diagram.svg';


function ServicesType({ name, img }) {
  const renderIcon = () => {
    switch (img) {
      case 'brand':
        return <DesignIcon />;
      case 'design':
        return <AccessibilityIcon />;
      case 'info':
        return <DiagramIcon />;
      case 'app':
        return <AppIcon />;
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
