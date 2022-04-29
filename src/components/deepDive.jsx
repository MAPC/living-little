import React, { useState, useContext } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import SocialSharing from './socialSharing';
import TypologyDropdown from './typologyDropdown';
import Overview from './overview';
import History from './history';
import PotentialLayouts from './potentialLayouts';
import Advantages from './advantages';
import Questions from './questions';
import CaseStudies from './caseStudies';
import Footnotes from './footnotes';
import { PopupContext } from './contexts/popupContext';
import Popup from './modules/popup';

const TypologyDeepDive = ({ typology }) => {

  const { popupState, sourceState } = useContext(PopupContext)
  const [popup, togglePopup] = popupState;
  const [popupSource, setPopupSource] = sourceState;

  return (
    <>
      <section className="section deep-dive-container">
        <div className="main-column" id="select">
          <TypologyDropdown typology={typology} />
          <SocialSharing typology={typology} />
          <Overview typology={typology} />
          <History typology={typology} />
          <div className="layouts">
            <Popup />
            <PotentialLayouts typology={typology} />
          </div>
          <Advantages typology={typology} />
          <Questions typology={typology} />
          {typology === "adu" || typology === "townhouse" || typology === "mixeduse"  || typology === "cohousing" ? <Footnotes typology={typology} /> : "" }
          <AnchorLink to={`#select`} className="anchor__wrapper">
            <FontAwesomeIcon icon={faArrowAltCircleUp} className="anchor__icon" />
            <span className="anchor__helper-text">Select another typology</span>
          </AnchorLink>
        </div>
      </section>
    </>
  );
};

export default TypologyDeepDive;
