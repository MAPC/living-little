import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import aduPdf from "../content/ADUs.pdf";
import cottagePdf from "../content/Cottages.pdf";
import townhousePdf from "../content/Townhouses.pdf";
import sfcPdf from "../content/Single_fam_conversion.pdf";
import mixedusePdf from "../content/Mixed_use.pdf";
import cohousingPdf from "../content/Cohousing.pdf";
import tinyhouse from "../content/Tinyhouse.pdf";

const DeepDivePdf = ({typology}) => {

    const deepDivePdf = {
        adu: aduPdf,
        cottage: cottagePdf,
        tinyhouse: tinyhouse,
        townhouse: townhousePdf,
        sfc: sfcPdf,
        mixeduse: mixedusePdf,
        cohousing: cohousingPdf
      };
  
  return (
  <div className="social-sharing__wrapper">
    <a href={deepDivePdf[typology]}>
      <FontAwesomeIcon icon={faPrint} className="social-sharing__icon social-sharing__icon--print" />
    </a>
  </div>
)};

export default DeepDivePdf;
