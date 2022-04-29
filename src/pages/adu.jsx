import React, { useContext } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TypologyGrid from '../components/typologyGrid';
import DeepDive from '../components/deepDive';
import LearnMore from '../components/learnMore';
import ContextVideos from '../components/contextVideos';
import { PopupProvider } from '../components/contexts/popupContext';

const Adu = () => {
  
  return (
    <Layout>
      <PopupProvider>
        <SEO title="Living Little" />
        <TypologyGrid />
        <ContextVideos />
        <DeepDive typology="adu" />
        <LearnMore />
      </PopupProvider>
    </Layout>
  )
};

export default Adu;
