import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import ReactTimeAgo from 'react-time-ago';

function UpdatesType({
  title, desc, date,
}) {
  return (
    <Link href="/" className="updates-type">
      <div className="updates-type-info">
        <div className="updates-type-date">
          <ReactTimeAgo date={date} />
        </div>
        <div className="updates-type-title">
          {title}
        </div>
        <div className="updates-type-desc">
          {desc}
        </div>
      </div>
    </Link>
  );
}

UpdatesType.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default UpdatesType;
