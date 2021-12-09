import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TypologyGrid from '../components/typologyGrid';
import DeepDive from '../components/deepDive';
import LearnMore from '../components/learnMore';
import ContextVideos from '../components/contextVideos';

const TinyHouse = () => (
  <Layout>
    <SEO title="Living Little" />
    <TypologyGrid />
    <ContextVideos />
    <DeepDive typology="tinyhouse" />
    <LearnMore />
  </Layout>
);

export default TinyHouse;
