import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Profile from '../components/profile';
import Services from '../components/services';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="left-panel">
      <Profile
        name="Kenny Lee"
        status="Web/Mobile developer"
        contact="hello@kennylwx.com"
      />
      <Services name="Services" />

    </div>
    <div className="right-panel" />
  </Layout>
);

export default IndexPage;
