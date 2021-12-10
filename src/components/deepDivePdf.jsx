import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faFile, faFileAlt, faFileDownload, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faDochub } from '@fortawesome/free-brands-svg-icons';

const DeepDivePdf = ({typology}) => {

    const deepDivePdf = {
        adu: "https://mapc.github.io/living-little/adu#select",
        cottage: "https://mapc.github.io/living-little/cottage/#select",
        tinyhouse: "https://mapc.github.io/living-little/tinyhouse#select",
        townhouse: "https://mapc.github.io/living-little/townhouse#select",
        sfc: "https://mapc.github.io/living-little/sfc#select",
        mixeduse: "https://mapc.github.io/living-little/mixeduse#select",
        cohousing: "https://mapc.github.io/living-little/cohousing#select"
      };
  
  return (
  <div className="social-sharing__wrapper">
    <a href={deepDivePdf[typology]}>
      <FontAwesomeIcon icon={faPrint} className="social-sharing__icon social-sharing__icon--print" />
      {/* <FontAwesomeIcon icon={faFileDownload} className="social-sharing__icon" /> */}
    </a>
  </div>
)};

export default DeepDivePdf;
