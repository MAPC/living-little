import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TypologyGrid from '../components/typologyGrid';
import DeepDive from '../components/deepDive';
import LearnMore from '../components/learnMore';
import ContextVideos from '../components/contextVideos';

const Sfc = () => (
  <Layout>
    <SEO title="Living Little" />
    <TypologyGrid />
    <ContextVideos />
    <DeepDive typology="sfc" />
    <LearnMore />
  </Layout>
);

export default Sfc;
