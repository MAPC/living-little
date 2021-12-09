import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TypologyGrid from '../components/typologyGrid';
import DeepDive from '../components/deepDive';
import CaseStudies from '../components/caseStudies';
import LearnMore from '../components/learnMore';
import ContextVideos from '../components/contextVideos';

const MixedUse = () => (
  <Layout>
    <SEO title="Living Little" />
    <TypologyGrid />
    <ContextVideos />
    <DeepDive typology="mixeduse" />
    <LearnMore />
  </Layout>
);

export default MixedUse;
