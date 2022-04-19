import PropTypes from 'prop-types';
import React from 'react';
import SubtopicHeader from './subtopicHeader';

const Footnotes = ({ typology }) => {

  const footnotes = 
  {
    adu: [
      <div>
        <p>Chapple, Karen. <a href="https://frameworks.ced.berkeley.edu/2011/accessory-dwelling-units/">Studying the Benefits of Accessory Dwelling Units.</a> UC Berkeley.</p>
        <p>City of Reno. <a href="https://www.reno.gov/home/showdocument?id=73423">Accessory Dwelling Units, Neighborhood Advisory Board Presentation.</a></p>
        <p>Hulse, Travis M. <a href="https://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1038&context=arch_crp_theses">Use of Accessory Dwelling Units as a Housing Strategy: A Case Study of Lawrence, Kansas.</a> University of Nebraska - Lincoln.</p>
        <p>ULI. <a href="https://triangle.uli.org/news/adus/">Accessory Dwelling Units: Friendly Density or Neighborhood Foe?</a></p>
      </div>,
      <div>
        <p>Garcia, David.<a href="https://ternercenter.berkeley.edu/wp-content/uploads/pdfs/ADU_Update_Brief_December_2017_.pdf"> ADU Update: Early Lessons and Impacts of California's State and Local Policy Changes.</a> UC Berkeley.</p>
      </div>
    ],
    cottage: [],
    tinyhouse: [],
    townhouse: [
      <div>
        <p><a href="http://www.mapc.org/wp-content/uploads/2017/10/MAPC_HousingEnrollment_Final.pdf"><em>The Waning Influence of Housing Production on Public School Enrollment in Massachusetts.</em></a> Tim Reardon and Sarah Philbrick; MAPC Research Brief, October 2017.</p>
        <p><a href="https://www.chapa.org/sites/default/files/f_1239203891HousingSchoolAgeChildren.pdf"><em>Housing the Commonwealth's School-Age Children: The Implications of Multi-Family Housing Development for Municipal and School Expenditures,</em></a> 2003, Community Opportunities Group, Inc. & Connery Associates; Citizens Planning and Housing Association.</p>
        <p><a href="https://www.mhp.net/writable/resources/documents/Cost_Benefit_new_housing_3-15-16.pdf"><em>The Costs And Hidden Benefits Of New Housing Development In Massachusetts.</em></a> Michael Goodman, Elise Korejwa, and Jason Wright; PPC Working Paper No. 02, March, 2016.</p>
      </div>
    ],
    sfc: [],
    mixeduse: [
      <div>
        <p><a href="https://storymaps.arcgis.com/stories/cb9bec551f9d48599f267f4ff6282906">Rethinking the Retail Strip.</a></p>
      </div>,
      <div>
        <p>Ibid.</p>
      </div>
    ],
    cohousing: [
      <div>
        <p>Brignall, Miles. <a href="https://www.theguardian.com/money/2009/oct/24/communal-living-grand-designs">Communal living: Grand designs on living in perfect harmony.</a> The Guardian, 23 October 2009.</p>
      </div>
    ]
  };

  const footnotesLi = footnotes[typology].map((elem) => {return <li>{elem}</li>;})

  return (
    <article className="article">
      <SubtopicHeader title="Footnotes" highlightWidth={112} />
      <ol>
          {footnotesLi}
      </ol>
    </article>
  );
};

Footnotes.propTypes = {
  typology: PropTypes.string.isRequired,
};

export default Footnotes;
