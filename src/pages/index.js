import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Profile from '../components/profile';
import Services from '../components/services';
import Socials from '../components/socials';
import Showcase from '../components/showcase';
import Updates from '../components/updates';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="left-panel">
      <Profile
        name="Kenny Lee"
        status="Web/Mobile developer"
        contact="hello@kennylwx.com"
      />
      <Services title="Specialty" />
      <Socials />
      <div className="filler" />

    </div>
    <div className="right-panel">
      <Showcase title="Highlights" />
      <Updates title="Recent Updates" />
    </div>
  </Layout>
);

export default IndexPage;
