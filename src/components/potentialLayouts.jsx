import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import SubtopicHeader from './subtopicHeader';
import potentialLayouts from '../content/potential-layouts.json';
import layoutAdu1 from "../images/layouts_ADU.jpg";
import layoutCottage1 from "../images/layouts_Cottages.jpg";
import layoutTinyhouse1 from "../images/layouts_Tiny.jpg";
import layoutTownhouse1 from "../images/layouts_Townhouse.jpg";
import layoutSfc1 from "../images/layouts_conversion.jpg";
import layoutMixedused1 from "../images/layouts_Mixed.jpg";
import layoutCohousing1 from "../images/layout-cohousing1.jpg";
import ImageModal from './modules/imageModal';
// import Popup from './modules/popup';
// import { PopupContext } from './contexts/popupContext';

const PotentialLayouts = ({ typology }) => {

  const potentialLayoutParagraphs = potentialLayouts[typology].map((paragraph) => <p className="potential-layouts__paragraph">{paragraph}</p>);

  const potentialLayoutImageSrc = {
    adu: [layoutAdu1],
    cottage: [layoutCottage1],
    tinyhouse: [layoutTinyhouse1],
    townhouse: [layoutTownhouse1],
    sfc: [layoutSfc1],
    mixeduse: [layoutMixedused1],
    cohousing: [layoutCohousing1]
  };

  // const potentialLayoutImages = potentialLayoutImageSrc[typology].map((image) => <img src={image}  className="potential-layouts__img" />)
  const potentialLayoutImages = potentialLayoutImageSrc[typology].map((image) => <ImageModal source={image} />)

  // const { popupState, sourceState } = useContext(PopupContext)
  // const [popup, togglePopup] = popupState;
  // const [popupSource, setPopupSource] = sourceState;

  return (
    <article className="article">
      {/* <Popup /> */}
      <SubtopicHeader title="Potential Layouts" highlightWidth={193} />
      {potentialLayoutParagraphs}
      {potentialLayoutImages}
    </article>
  );
};

PotentialLayouts.propTypes = {
  typology: PropTypes.string.isRequired,
};

export default PotentialLayouts;
