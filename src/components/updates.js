import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import UpdatesType from './updatestype';

function Updates({ title }) {
  const arr = [
    {
      id: 0,
      title: 'There are many reasons why you should use React but there are also as many not to. ',
      desc: 'A simple task tracker with a burndown calendar chart in with',
      date: '1 week ago',
    },
    {
      id: 1,
      title: 'There are many reasons why you should use React but there are also as many not to. ',
      desc: 'A simple task tracker with a burndown calendar chart in with',
      date: '1 week ago',
    },
    {
      id: 2,
      title: 'There are many reasons why you should use React but there are also as many not to. ',
      desc: 'A simple task tracker with a burndown calendar chart in with',
      date: '1 week ago',
    },
  ];

  return (
    <div className="updates">
      <div className="updates-title">
        {title}
      </div>
      <div className="updates-container">
        {
          arr.map((upd) => (
            <UpdatesType
              key={upd.id}
              title={upd.title}
              desc={upd.desc}
              date={upd.date}
            />
          ))
        }
      </div>
      <Link href="/" className="updates-more">
        more
      </Link>
    </div>
  );
}

Updates.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Updates;
