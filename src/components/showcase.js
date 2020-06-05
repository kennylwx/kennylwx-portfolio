import React from 'react';
import { Link } from 'gatsby';
import ShowcaseType from './showcasetype';
import GithubIcon from '../assets/icons/github-inactive.svg';
import DocumentIcon from '../assets/icons/document.svg';

function Showcase() {
  const arr = [
    {
      title: 'TaskBurner',
      desc: 'A task/goals application with a burndown calendar made in React Native.',
      link1: <GithubIcon />,
      link2: <DocumentIcon />,
    },
    {
      title: 'TaskBurner',
      desc: 'A task/goals application with a burndown calendar made in React Native.',
      link1: <GithubIcon />,
      link2: <DocumentIcon />,
    },
    {
      title: 'TaskBurner',
      desc: 'A task/goals application with a burndown calendar made in React Native.',
      link1: <GithubIcon />,
      link2: <DocumentIcon />,
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
