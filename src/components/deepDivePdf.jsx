import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import aduPdf from "../content/SS_LL_Report_ADU.pdf";
import cottagePdf from "../content/SS_LL_Report_Cottage.pdf";
import townhousePdf from "../content/SS_LL_Report_Townhouse.pdf";
import sfcPdf from "../content/SS_LL_Report_SFHC.pdf";
import mixedusePdf from "../content/SS_LL_Report_Small_Scale_Mixed_Use.pdf";
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
