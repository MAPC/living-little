import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GridItem from './gridItem';

const TypologyGrid = () => {
  return (
    <section className="section">
      <div className="main-column">
        <div className="typology-grid-container">
          <div className="typology-grid-text">
            <h2 className="h2">What are the types of <br/>living little?</h2>
            <div className="dropdown__shadow" style={{ width: "174px" }}></div>
            <p>What some of the alternative housing opportunities available to meet an ever growing demand for housing in the region?</p>
            <p>Here are seven alternative housing opportunities:</p>
          </div>
          <GridItem typology="adu" />
          <GridItem typology="cottage" />
          <GridItem typology="tinyhouse" />
          <GridItem typology="townhouse" />
          <GridItem typology="sfc" />
          <GridItem typology="mixeduse" />
          <GridItem typology="cohousing" />
        </div>
      </div>
    </section>
  );
}

export default TypologyGrid;
