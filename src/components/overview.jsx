import PropTypes from 'prop-types';
import React from 'react';
import definitions from '../content/full-definitions.json';
import overviewAdu1 from "../images/overview-adu1.jpg";
import overviewTinyHouse1 from "../images/overview-tinyhouse1.png";
import overviewCottage1 from "../images/overview-cottage1.jpg";
import overviewSfc1 from "../images/overview-sfc1.jpg";
import overviewTownhouse1 from "../images/overview-townhouse1.jpg";
import overviewMixedUse1 from "../images/overview-mixeduse1.jpg";
import overviewCohousing1 from "../images/overview-cohousing1.jpg";


const Overview = ({ typology }) => {

  const overviewSrc = {
      adu: [overviewAdu1],
      cottage: [overviewCottage1],
      tinyhouse: [overviewTinyHouse1],
      townhouse: [overviewTownhouse1],
      sfc: [overviewSfc1],
      mixeduse: [overviewMixedUse1],
      cohousing: [overviewCohousing1]
  };

  const imageCredit = {
    adu: <p>Photo Credit: <a href="https://www.flickr.com/photos/sightline_middle_housing/48140065193/">Sightline Institute</a><br/>Location: Tacoma</p>,
    cottage: <p>Photo Credit: <a href="https://www.flickr.com/photos/studio-d/albums/154825">Karen Delucas</a></p>,
    tinyhouse: <p>Photo Credit: <a href="https://www.flickr.com/photos/faircompanies/44397498292/">Nicolás Boullosa</a><br/>Location: CA</p>,
    townhouse: <p>Photo Credit: Union Studio (Architect) and Nat Rea (photographer)<br/>Location: North Cove Landing</p>,
    sfc: <p>Photo Credit: Alex Koppelman<br/>Location: Newton, MA</p>,
    mixeduse: <p>Photo Credit: Lydia</p>,
    cohousing: <p>Photo Credit: <a href="https://www.flickr.com/photos/punktoad/albums/72157649779167604">PunkToad</a><br/>Location: Swans Market, Oakland</p>,
  }

  const overviewImages = overviewSrc[typology].map((image) => <img src={image} alt={typology} className="overview__image" />)

  return (
    <article className="article overview">
      <p>{definitions[typology]}</p>
      {overviewImages}
      {imageCredit[typology]}
    </article>
  );
};

Overview.propTypes = {
  typology: PropTypes.string.isRequired,
};

export default Overview;
