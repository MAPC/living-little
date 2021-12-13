import PropTypes from 'prop-types';
import React from 'react';
import SubtopicHeader from './subtopicHeader';
import history from '../content/history.json';
import advantages from '../content/advantages.json';

const Footnotes = ({ typology }) => {

  const footnotes = 
  {
    adu: [],
    cottage: [],
    tinyhouse: [],
    townhouse: [
      "awaiting citationm for history"
    ],
    sfc: [],
    mixeduse: [],
    cohousing: ["https://www.theguardian.com/money/2009/oct/24/communal-living-grand-designs"]
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
