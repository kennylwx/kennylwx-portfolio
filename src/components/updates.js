import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import UpdatesType from './updatestype';


function Updates({ title, num }) {
  const arr = [
    {
      id: 0,
      title: 'There are many reasons why you should use React but there are also as many not to. ',
      desc: 'A simple task tracker with a burndown calendar chart in with',
      date: '2020-06-06',
    },
    {
      id: 1,
      title: 'There are many reasons why you should use React but there are also as many not to. ',
      desc: 'A simple task tracker with a burndown calendar chart in with',
      date: '2020-06-05',
    },
    {
      id: 2,
      title: 'There are many reasons why you should use React but there are also as many not to. ',
      desc: 'A simple task tracker with a burndown calendar chart in with',
      date: '2020-06-01',
    },
    {
      id: 3,
      title: 'There are many reasons why you should use React but there are also as many not to. ',
      desc: 'A simple task tracker with a burndown calendar chart in with',
      date: '2020-06-02',
    },
    {
      id: 4,
      title: 'There are many reasons why you should use React but there are also as many not to. ',
      desc: 'A simple task tracker with a burndown calendar chart in with',
      date: '2020-06-04',
    },
    {
      id: 5,
      title: 'There are many reasons why you should use React but there are also as many not to. ',
      desc: 'A simple task tracker with a burndown calendar chart in with',
      date: '2020-06-06',
    },
  ];

  const findLatestPost = () => {
    const result = [];
    // sort by the latest post
    arr.sort((a, b) => new Date(b.date) - new Date(a.date));

    for (let i = 0; i < num; i += 1) {
      result.push(arr[i]);
    }
    return result;
  };


  return (
    <div className="updates">
      <div className="updates-title">
        {title}
      </div>
      <div className="updates-container">
        {
          findLatestPost().map((upd) => (
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
  num: PropTypes.number.isRequired,
};

export default Updates;
