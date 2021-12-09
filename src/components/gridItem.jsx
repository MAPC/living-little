import React from 'react';
import PropTypes from 'prop-types';
import definitions from '../content/definitions.json';
import fullNames from '../content/full-names.json';
import gridAdu from "../images/grid/adu.jpg";
import gridCottage from "../images/grid/cottage.jpg";
import gridTinyHouse from "../images/grid/main-tinyhouse1.jpg";
import gridTownhouse from "../images/grid/main-townhouse1.png";
import gridSfc from "../images/grid/main-sfc1.jpg";
import gridMixedUse from "../images/grid/main-mixeduse1.jpg";
import gridCohousing from "../images/grid/main-cohousing1.jpg";

const GridItem = ({ typology }) => {
  const gridImageSrc = {
    adu: [gridAdu],
    cottage: [gridCottage],
    tinyhouse: [gridTinyHouse],
    townhouse: [gridTownhouse],
    sfc: [gridSfc],
    mixeduse: [gridMixedUse],
    cohousing: [gridCohousing]
  };
  const toggleClasses = () => {
    const parentNode = document.querySelector(`.cell__wrapper--${typology}`);
    parentNode.querySelector('.cell__overlay').classList.toggle('cell__overlay--hover');
    parentNode.querySelector('.overlay__description').classList.toggle('overlay__description--hover');
  };
  return (
    <div className={`cell__wrapper cell__wrapper--${typology}`}>
      <h3 className="h3 cell__title">{fullNames[typology]}</h3>
      <img 
        src={gridImageSrc[typology]}
        alt={typology}
        className="cell__image"
        style={{ 
          display: 'block',
          width: 640,
          height: 457 }}
      />
      <div
        className="cell__overlay"
        onMouseEnter={() => toggleClasses()}
        onMouseLeave={() => toggleClasses()}
      >
        <h3 className="h3 overlay__title">{fullNames[typology]}</h3>
        <p className="overlay__description">{definitions[typology]}</p>
      </div>
    </div>
  );
};

GridItem.propTypes = {
  typology: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};
export default GridItem;
