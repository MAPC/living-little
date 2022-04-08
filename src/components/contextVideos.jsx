import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SubtopicHeader from './subtopicHeader';

const ContextVideos = () => {

  return (
    <section className="section">
      <div className="main-column context-videos">
        <SubtopicHeader title="Why Living Little?" highlightWidth={200} />
        <p>There’s more to Greater Boston’s housing crisis than simply a lack of affordable housing. In the region’s suburbs, where most homes are single-family detached houses, there is also a lack of different types of housing, which leads to a mismatch between available housing options and the needs of the people who live there. </p>
        <div className="context-videos-embed">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Zf6dtAg9pfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <SubtopicHeader title="Barriers to Living Little" highlightWidth={255} />
        <p>If so many people want smaller housing options, why does it seem like huge, expensive houses are the only things being built in many suburban towns? This video breaks down housing costs and the ways that local policy can encourage or discourage certain types of housing. </p>
        <div className="context-videos-embed">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/X1qwyLmjA9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <SubtopicHeader title="Living Little in our Communities" highlightWidth={350} />
        <p>In most suburban neighborhoods, it’s no longer legal to build modest homes like duplexes or backyard cottages. But these rules can be changed!</p>
        <div className="context-videos-embed">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XZ5rZV8aX2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  )
};

export default ContextVideos;
