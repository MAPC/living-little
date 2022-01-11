import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import aduPdf from "../content/SS_LL_Report_ADU.pdf";
import cottagePdf from "../content/SS_LL_Report_Cottage.pdf";
import townhousePdf from "../content/Townhouse.pdf";
import sfcPdf from "../content/Conversion.pdf";
import mixedusePdf from "../content/Mixed-use.pdf";
import cohousingPdf from "../content/SS_LL_Report_Cohousing.pdf";

const DeepDivePdf = ({typology}) => {

    const deepDivePdf = {
        adu: aduPdf,
        cottage: cottagePdf,
        tinyhouse: "",
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
