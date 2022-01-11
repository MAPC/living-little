import PropTypes from 'prop-types';
import React from 'react';
import SubtopicHeader from './subtopicHeader';
import OpportunityButton from './opportunityButton';
import opportunties from '../content/opportunities.json';
import potentialLayouts from '../content/potential-layouts.json';
import layoutAdu1 from "../images/layout-adu.png";
import layoutCottage1 from "../images/layout-cottage1.png";
import layoutTinyhouse1 from "../images/layout-tiny1.png";
import layoutTownhouse1 from "../images/layout-townhouse1.jpg";
import layoutSfc1 from "../images/layout-sfc1.jpg";
import layoutMixedused1 from "../images/layout-mixeduse1.jpg";
import layoutCohousing1 from "../images/layout-cohousing1.jpg";

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

  const potentialLayoutImages = potentialLayoutImageSrc[typology].map((image) => <img src={image}  className="potential-layouts__img" />)

  return (
    <article className="article">
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
