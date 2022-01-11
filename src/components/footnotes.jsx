import PropTypes from 'prop-types';
import React from 'react';
import SubtopicHeader from './subtopicHeader';
import history from '../content/history.json';
import advantages from '../content/advantages.json';

const Footnotes = ({ typology }) => {

  const footnotes = 
  {
    adu: [
      <div>
        <p>Chapple, Karen. <a href="https://frameworks.ced.berkeley.edu/2011/accessory-dwelling-units/">Studying the Benefits of Accessory Dwelling Units.</a> UC Berkeley.</p>
        <p>City of Reno. <a href="https://www.reno.gov/home/showdocument?id=73423">Accessory Dwelling Units, Neighborhood Advisory Board Presentation.</a></p>
        <p>Hulse, Travis M. <a href="https://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1038&context=arch_crp_theses">Use of Accessory Dwelling Units as a Housing Strategy: A Case Study of Lawrence, Kansas.</a> University of Nebraska - Lincoln.</p>
        <p>ULI. <a href="https://triangle.uli.org/news/adus/">Accessory Dwelling Units: Friendly Density or Neighborhood Foe?</a></p>
      </div>
    ],
    cottage: [

    ],
    tinyhouse: [

    ],
    townhouse: [
      <div>
        <p><a href="http://www.mapc.org/wp-content/uploads/2017/10/MAPC_HousingEnrollment_Final.pdf"><em>The Waning Influence of Housing Production on Public School Enrollment in Massachusetts.</em></a> Tim Reardon and Sarah Philbrick; MAPC Research Brief, October 2017.</p>
        <p><a href="https://www.chapa.org/sites/default/files/f_1239203891HousingSchoolAgeChildren.pdf"><em>Housing the Commonwealth’s School-Age Children: The Implications of Multi-Family Housing Development for Municipal and School Expenditures,</em></a> 2003, Community Opportunities Group, Inc. & Connery Associates; Citizens Planning and Housing Association.</p>
        <p><a href="http://publicpolicycenter.org/wp/wp-content/uploads/2016/03/GoodmanKorejwaWright_TheCostsBenefitsOfNewHousingDevelopment.pdf"><em>The Costs And Hidden Benefits Of New Housing Development In Massachusetts.</em></a> Michael Goodman, Elise Korejwa, and Jason Wright; PPC Working Paper No. 02, March, 2016.</p>
      </div>
    ],
    sfc: [
    ],
    mixeduse: [
    ],
    cohousing: []
  };

  const footnotesLi = footnotes[typology].map((elem) => {return <li>{elem}</li>;})
  console.log("footnotesLi", footnotesLi);

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
