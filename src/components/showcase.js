import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import ShowcaseType from './showcasetype';

function Showcase({ title, num }) {
  const arr = [
    {
      id: 0,
      title: 'TaskBurner',
      desc: 'A task/goals application with a burndown calendar made in React Native.',
      date: '2020-06-04',
      link1: 'https://github.com',
      link2: 'https://blog.com',
    },
    {
      id: 1,
      title: 'TaskBurner',
      desc: 'A task/goals application with a burndown calendar made in React Native.',
      date: '2020-06-03',
      link1: 'https://github.com',
      link2: 'https://blog.com',
    },
    {
      id: 2,
      title: 'TaskBurner',
      desc: 'A task/goals application with a burndown calendar made in React Native.',
      date: '2020-06-07',
      link1: 'https://github.com',
      link2: 'https://blog.com',
    },
    {
      id: 3,
      title: 'TaskBurner',
      desc: 'A task/goals application with a burndown calendar made in React Native.',
      date: '2020-06-01',
      link1: 'https://github.com',
      link2: 'https://blog.com',
    },
    {
      id: 4,
      title: 'TaskBurner',
      desc: 'A task/goals application with a burndown calendar made in React Native.',
      date: '2020-06-02',
      link1: 'https://github.com',
      link2: 'https://blog.com',
    },
    {
      id: 5,
      title: 'TaskBurner',
      desc: 'A task/goals application with a burndown calendar made in React Native.',
      date: '2020-06-06',
      link1: 'https://github.com',
      link2: 'https://blog.com',
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
    <div className="showcase">
      <div className="showcase-title">
        {title}
      </div>
      <div className="showcase-container">
        {
          findLatestPost().map((show) => (
            <ShowcaseType
              key={show.id}
              title={show.title}
              desc={show.desc}
              link1={show.link1}
              link2={show.link2}
            />
          ))
        }
      </div>
      <Link href="/" className="showcase-more">
        More
      </Link>
    </div>
  );
}

Showcase.propTypes = {
  title: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
};

export default Showcase;
