import PropTypes from 'prop-types';
import React from 'react';

const SubtopicHeader = ({ title, highlightWidth, padding  }) => (
  <div className="subtopic__wrapper" style={{padding: `${padding}`}}>
    <h3 className="h3 subtopic__title" style={{ fontSize: `1.5rem` }}>{title}</h3>
    <div className="subtopic__highlight" style={{ width: `${highlightWidth}px` }} />
  </div>
);

SubtopicHeader.propTypes = {
  title: PropTypes.string.isRequired,
  highlightWidth: PropTypes.number.isRequired,
};

export default SubtopicHeader;
