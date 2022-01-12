import PropTypes from 'prop-types';
import React from 'react';
import SubtopicHeader from './subtopicHeader';
import OpportunityButton from './opportunityButton';
import opportunties from '../content/opportunities.json';
import history from '../content/history.json';
import advantages from '../content/advantages.json';
import townhousePdf from "../content/Townhouse.pdf";
import sfcPdf from "../content/Conversion.pdf";
import mixedusePdf from "../content/Mixed-use.pdf";
import cohousingPdf from "../content/SS_LL_Report_Cohousing.pdf";

const historyContent = {
  adu: <p className="history__paragraph">ADUs were prevalent before World War II throughout American towns and cities, often housing in-laws, smaller households, or house workers. Following the end of WWII and the move towards single-family development, low-density suburbs, and increased zoning restrictions, ADUs lost popularity or were zoned out of existence. Beginning in the 1970s, a handful of municipalities began to write ADUs back into their zoning, recognizing ADUs as one solution to high housing costs. Nationally, Oregon and California are at the forefront of creating flexible zoning to encourage ADUs.</p>,
  tinyhouse: <p className="history__paragraph">At the start of the tiny house movement, most owners living in them were doing so illegally as their dimensions were oftentimes less than minimum building requirements. However, regulations for tiny houses have evolved. The majority of tiny houses are built on wheels, as it makes them easier to move and legal under RV laws and standards. Unlike mobile homes and RVs, tiny houses tend to be designed to architecturally resemble traditional homes. In 2016, Fresno was the first city to approve new rules to allow tiny houses on wheels to be parked on an existing residential property as an ADU.</p>,
  townhouse: <p className="history__paragraph">From the brownstones of Back Bay to historic homes in and around town centers across Massachusetts, <a href={townhousePdf}>townhouses</a> have a special place in Greater Boston’s history. Originating in London and Paris, townhouses became popular in New England in part thanks to Bostonian architect Charles Bullfinch, who designed some of Boston’s first townhouses after spending time in Europe. Compact yet private, townhouses emerged as a popular housing type for the urban middle class. The townhouse concept was also widely employed to meet increasing demand for workforce housing during the industrial revolution.[1]</p>,
  sfc: <p className="history__paragraph">In the mid-1900s, <a href={sfcPdf}>home conversions</a> were conceived as mechanism to preserve large historic houses, many of which were originally designed for households that included extended family members and servants, that could no longer be maintained by a single owner. Today, they also provide the opportunity to create smaller homes in a way that is consistent with the scale and character of existing neighborhoods.</p>,
  mixeduse: 
    <div>
      <p className="history__paragraph"><a href={mixedusePdf}>Mixed-use</a> neighborhoods have been common in urban areas for centuries. In its earliest forms, mixed-use most typically consisted of a ground floor workshop or merchant space with living space for the shop owner above or behind. In the nineteenth century, residential apartments above a retail space became the prevalent typology for main streets in towns and small cities across the country.</p>
      <p className="history__paragraph">However, with the advent of zoning in the 1920s, land use policies began to require separation of retail, housing, and manufacturing to protect public health. This trend became more pronounced in the mid-twentieth century as new suburban neighborhoods on previously undeveloped land were able to more fully separate different land uses. These suburban zoning regulations heavily favored single-family homes and auto-centric communities, making it difficult to realize the town commons and centers typical of the traditional New England community. Today, many towns in Massachusetts are utilizing mixed-use development to help revive aging commercial areas and create pedestrian-oriented communities.</p>
    </div>,
  cottage: <p className="history__paragraph">Cottages first appeared on the Cape Cod peninsula as a more permanent form of the self-built summer campgrounds used before WWII. In the late 1930s, local zoning laws were created to stop these camp homes. While many cottages are illegal under existing zoning laws, a number of towns in Massachusetts and nationwide have recently updated their zoning to allow for cottage housing in response to an increasing desire for smaller housing options that fit many towns’ suburban character. In a second phase of the Living Little project, MAPC worked with partner towns to study cottage housing and draft recommendations for cottage zoning.</p>,
  cohousing: <p className="history__paragraph"><a href={cohousingPdf}>Cohousing</a> is the term for an intentional community of private residences surrounded by shared open space and common areas, grounded in social connectedness and communal support. The concept of private dwellings around shared public spaces is centuries old, but cohousing in its modern form was pioneered in Denmark in the 1960s.[1] There are over 250 cohousing communities in the United States today, including several in Massachusetts. They attract a wide variety of people—families who want to raise their children in a supportive community, seniors who want to avoid the isolation often associated with aging, singles or couples who value communities with a diverse range of ages and household types, or anyone seeking connectedness and purposeful living.</p>
}

const History = ({ typology }) => {
  const historyParagraphs = historyContent[typology];
  const advantagesButtons = advantages[typology].advantages.map((advantage) => <OpportunityButton description={advantage} /> )
  return (
    <article className="article">
      <SubtopicHeader title="History" highlightWidth={85} />
      {historyParagraphs}
      <div className="opportunity__wrapper">
        {advantagesButtons}
      </div>
    </article>
  );
};

History.propTypes = {
  typology: PropTypes.string.isRequired,
};

export default History;
