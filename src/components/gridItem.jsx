import React from 'react';
import PropTypes from 'prop-types';
import definitions from '../content/definitions.json';
import fullNames from '../content/full-names.json';
import gridAdu from "../images/grid/main-adu.jpg";
import gridCottage from "../images/grid/cottage.jpg";
import gridTinyHouse from "../images/grid/main-tinyhouse1.jpg";
import gridTownhouse from "../images/grid/main-townhouse1.jpg";
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
  const imageCredit = {
    adu: <p>Photo Credit: <a href="https://www.flickr.com/photos/140988606@N08/46355230282/in/photolist-2dCfEYj-hjEgMW-eiXQRK-hjEd6f-2xs7Km-hjDJ7k-4DwXQd-qRNkao-hjDLdV-2jgyay3-WTYcq6-2cjrUCE-27mbnQW-bRonSk-J59xr5-ocQiS2-8Sx26k-fyAeCV-9PSD16-hjEdTj-2kSX2kb-HHv7vU-2isyQ7y-9LQAoN-eM1raK-2c2JRDx-gyTWVT-etqUAY-FL4RF3-pdhAUF-hHwud2-6wg9G8-q3rUTM-PApTGi-bCX4e6-7uKqVY-2isyQfz-2k4GdL9-2kLn7vz-W1qxPV-2k4GdG6-6fNCyF-ctTfNW-abez2o-2fvh5Xz-2kPbcD1-2gG3taV-ZaZ3eN-2k4GdNJ-68d7JP">Christoph Scholz</a></p>,
    cottage: <p>Photo credit: <a href="http://unionstudioarch.com/projects/capitol-square/">Union Studio Architecture</a> and Nat Rea Photography</p>,
    tinyhouse: <p>Photo Credit: Alexis Smith</p>,
    townhouse: <p>Photo Credit: <a href="https://www.pexels.com/photo/house-architecture-home-modern-4044800/">Curtis Adams</a></p>,
    sfc: <p>Photo Credit: <a href="https://www.flickr.com/photos/24736216@N07/4264231167/">Flickr user Roger W</a></p>,
    mixeduse: <p>Photo credit: <a href="http://unionstudioarch.com/projects/capitol-square/">Union Studio Architecture</a> and Nat Rea Photography</p>,
    cohousing: <p>Photo Credit: <a href="https://www.flickr.com/photos/altopower/494359227/">Flickr user Anne</a></p>,
  }
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
          objectFit: 'cover'
        }}
      />
      <div
        className="cell__overlay"
        onMouseEnter={() => toggleClasses()}
        onMouseLeave={() => toggleClasses()}
      >
        <h3 className="h3 overlay__title">{fullNames[typology]}</h3>
        <p className="overlay__description">{definitions[typology]}</p>
      </div>
      <div>
        {imageCredit[typology]}
      </div>
    </div>
  );
};

GridItem.propTypes = {
  typology: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};
export default GridItem;
