import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GridItem from './gridItem';
import SubtopicHeader from './subtopicHeader';

const TypologyGrid = () => {
  return (
    <section className="section">
      <div className="main-column">
        <div className="typology-grid-container">
          <div className="typology-grid-text">
            <h2 className="h2" style={{display: "inline-flex"}}>What does
            <SubtopicHeader title="living little" highlightWidth={130} padding={`0 6px`} /></h2>
            <h2 className="h2" style={{marginTop: 0}}>look like?</h2>
            <p>There are many types of homes that would provide more housing options for smaller households while maintaining compatibility with the small-town character of suburban and rural communities in Greater Boston. Living little explores seven of these types: </p>
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
