import PropTypes from 'prop-types';
import React from 'react';
import overviewAdu1 from "../images/overview-adu1.jpg";
import overviewTinyHouse1 from "../images/overview-tinyhouse1.png";
import overviewCottage1 from "../images/overview-cottage1.jpg";
import overviewSfc1 from "../images/overview-sfc1.jpg";
import overviewTownhouse1 from "../images/overview-townhouse1.jpg";
import overviewMixedUse1 from "../images/overview-mixeduse1.jpg";
import overviewCohousing1 from "../images/Cohousing_25.jpg";


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
    adu: <p>Photo Credit: <a href="https://www.flickr.com/photos/sightline_middle_housing/48376579112/in/photolist-2gGSByd-2gHm4VH-2gAXCVY-2gX9SfB-2gX98XQ-2gX9SBt-2gGSFJC-2gX995i-2gTDREz-2gTCYku-2gTCYif-2gX9SQV-2gTCYpn-2gTDRHa-2gGSt1m-2gTDRUN-29kifcg-2gTDRLb-2gAX5f6-2gTDRQ9-2gGStb1-2gAX59K-2gTDRMy-2gAX5zE-2gmEzVw-2gGPSB5-2gAX5nq-2gTCYz7-2gTDRRg-2gmF2hz-2gTCYBb-2gGRJu3-2gGPb3d-2gTCYDa-2gTCYFj-2gGPSXa-2diNYtx-2gGP6mz-2gAXDTE-2gGRMkV-2gTCYKn-2gAX6bj-2gTDS4k-2gTDRZY-2gmF3kB-2gkYqd2-2gTCYNo-2gTDS9R-2gTCYQ2-2gAUquF">Sightline Institute</a></p>,
    cottage: <p>Photo Credit: <a href="http://unionstudioarch.com/projects/capitol-square/">Union Studio Architecture</a> and Nat Rea Photography</p>,
    tinyhouse: <p>Photo Credit: <a href="https://www.flickr.com/photos/faircompanies/44397498292/">Nicolás Boullosa</a></p>,
    townhouse: <p>Photo Credit: <a href="https://www.flickr.com/photos/sightline_middle_housing/48376579112/in/photolist-2gGSByd-2gHm4VH-2gAXCVY-2gX9SfB-2gX98XQ-2gX9SBt-2gGSFJC-2gX995i-2gTDREz-2gTCYku-2gTCYif-2gX9SQV-2gTCYpn-2gTDRHa-2gGSt1m-2gTDRUN-29kifcg-2gTDRLb-2gAX5f6-2gTDRQ9-2gGStb1-2gAX59K-2gTDRMy-2gAX5zE-2gmEzVw-2gGPSB5-2gAX5nq-2gTCYz7-2gTDRRg-2gmF2hz-2gTCYBb-2gGRJu3-2gGPb3d-2gTCYDa-2gTCYFj-2gGPSXa-2diNYtx-2gGP6mz-2gAXDTE-2gGRMkV-2gTCYKn-2gAX6bj-2gTDS4k-2gTDRZY-2gmF3kB-2gkYqd2-2gTCYNo-2gTDS9R-2gTCYQ2-2gAUquF">Sightline Institute</a></p>,
    sfc: <p>Photo Credit: Alex Koppelman</p>,
    mixeduse: <p>Photo Credit: <a href="http://unionstudioarch.com/projects/capitol-square/">Union Studio Architecture</a> and Nat Rea Photography</p>,
    cohousing: <p>Photo Credit: <a href="https://www.flickr.com/photos/antoniseb/13909899889/">Flickr user Jay Cross</a></p>,
  }

  const definitions = {
    adu: <p>An Accessory Dwelling Unit, or ADU, is a smaller apartment on the same lot as a larger main house. ADUs are also known as “granny flats,” “carriage houses,” or “in-law apartments.” ADUs can be within the existing house (for example, in a finished basement), added to an existing structure (for example, in space above the garage or as a small addition to the main house), or free-standing (for example, in a converted a carriage house).</p>,
    cottage: <p>Cottage housing, also called pocket neighborhoods, is known for its small houses clustered around shared green spaces. They are usually designed to be pedestrian-oriented, so parking is typically located behind the houses in a less prominent location rather than right next to each house. While cottage housing is best known for its small single-family houses, they can also include a mix of two-family houses, townhouses, or small apartment buildings.</p>,
    tinyhouse: <p>While Henry David Thoreau’s 150-square-foot cabin at Walden Pond in Concord is arguably one of the most famous tiny houses, the Tiny House Movement as such took off in 2008 after the subprime mortgage crisis and Great Recession. The movement was a response to the millions of foreclosures during that time, as well as the perception that the McMansion model of living was unsustainable. Today a “tiny house” typically refers to one that is smaller than 500 square feet, usually with a high-pitched ceiling and a porch.</p>,
    townhouse: "",
    sfc: "",
    mixeduse: "",
    cohousing: ""
  };
  const overviewImages = overviewSrc[typology].map((image) => <img src={image} alt={typology} className="overview__image" />);

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
