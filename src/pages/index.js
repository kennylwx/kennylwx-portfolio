import React from 'react';
import JavascriptTimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Profile from '../components/profile';
import Services from '../components/services';
import Socials from '../components/socials';
import Highlight from '../components/highlight';
import Updates from '../components/updates';

JavascriptTimeAgo.addLocale(en);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main-panel">
      <div className="left-panel">
        <Profile
          name="Kenny Lee"
          status="Freelance Web Developer"
          contact="hello@kennylwx.com"
        />
        <Services title="Focus Area" />
        <Socials />
        <div className="filler" />
      </div>
      <div className="right-panel">
        <Highlight title="Highlights" postNum={2} />
        <Updates title="Recent Posts" postNum={3} />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
