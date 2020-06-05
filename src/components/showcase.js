import React from 'react';
import { Link } from 'gatsby';
import ShowcaseType from './showcasetype';

function Showcase() {
  const arr = [
    {
      id: 0,
      title: 'TaskBurner',
      desc: 'A task/goals application with a burndown calendar made in React Native.',
      link1: 'https://github.com',
      link2: 'https://blog.com',
    },
    {
      id: 1,
      title: 'TaskBurner',
      desc: 'A task/goals application with a burndown calendar made in React Native.',
      link1: 'https://github.com',
      link2: 'https://blog.com',
    },
    {
      id: 2,
      title: 'TaskBurner',
      desc: 'A task/goals application with a burndown calendar made in React Native.',
      link1: 'https://github.com',
      link2: 'https://blog.com',
    },
  ];

  const showcaseTitle = 'Past Works';

  return (
    <div className="showcase">
      <div className="showcase-title">
        {showcaseTitle}
      </div>
      <div className="showcase-container">
        {
          arr.map((show) => (
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

export default Showcase;
