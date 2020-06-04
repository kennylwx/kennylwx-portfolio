import React from 'react';
import PropTypes from 'prop-types';
import Image from './image';

function Profile({ name, status, contact }) {
  return (
    <div className="author-profile">
      <div className="author-img">
        <Image
          objectFit="cover"
          objectPosition="50% 50%"
          alt="profile-img"
        />
      </div>
      <div className="author-info">
        <div className="author-name">
          {name}
        </div>
        <div className="author-status">
          {status}
        </div>
        <div className="author-contact">
          {contact}
        </div>
      </div>
    </div>

  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};

export default Profile;
