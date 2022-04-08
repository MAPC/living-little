import React from 'react';
import SEO from '../components/seo';
import AboutHeader from '../components/aboutHeader';
import SubtopicHeader from '../components/subtopicHeader';
import Footer from '../components/footer';
import '../styles/about.scss';
import report from '../content/Living-Little-Full-Report.pdf';
import questions from '../content/about-questions.json';
import icon from "../images/question-icon.png";
import adu from "../images/grid/main-adu.jpg";
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const AboutPage = () => {

    const questionDivs = questions["questions"].map((elem) => 
        <div className="questions__content">
            <div className="questions__icon">
            <img src={icon}/>
            </div>
            <div className="questions__copy">
            <p className="questions__copy-question">{elem["q"]}</p>
            <p>{elem["a"]}</p>
            </div>
        </div>
    );

  return (
    <div>
        <SEO title="Living Little - About" />
        <AboutHeader siteTitle="living little" />
        <section className="section main-column">
            <div className="about-container">
                <div className="about-text">
                    <article>
                        <SubtopicHeader title="Why do we need smaller housing options?" highlightWidth={450} />
                        <p>The Greater Boston region is experiencing a housing crisis stemming from a lack of affordable housing and appropriate housing options for today’s range of household types and incomes. This shortage is not just about a lack of housing overall, but also a lack of different types of housing, especially smaller and therefore usually lower-cost options.</p>
                        <ul>
                            <li>Outside of Boston’s inner core, most of the homes in the region (71%) are single-family homes (ACS 2014-18).</li>
                            <li>However, three out of five households in the region are composed of only one or two people (U.S. Census 2010). Smaller households have difficulty finding homes in Greater Boston that suit their needs and incomes.</li>
                            <li>Despite households continuing to shrink in size, home sizes have been growing: the average size of a new single-family home built in the northeast U.S. in 2019 was 2,700 square feet, while the average size in 1973 was 1,600 square feet (U.S. Census Bureau Annual Survey of Construction).</li>
                            <li>Housing prices in the region are tremendously high. At the end of 2019, the median single-family home price in metro Boston ($505,048) was more than twice as high as the national home price of $244,218 (Zillow Home Value Index, 2019).</li>
                            <li>These high housing costs have real impacts on the region’s residents. Approximately 37% of the region’s households pay more than 30% of their income for housing, meeting the federal government’s definition of “housing cost burdened” (American Community Survey 2014-18).</li>
                            <li>The number of seniors in the region grew by 17% from 2000-2016 (ACS 2012-16, US Census 2000). Many Baby Boomers are “over-housed,” meaning their houses are bigger than they need, requiring significant upkeep, high tax payments, and costly modifications to enable aging in place.</li>
                        </ul>
                    </article>
                    <article>
                        <SubtopicHeader title="Benefits of Living Little" highlightWidth={261} />
                        <img src={adu} width="100%" height="auto" />
                        <p>Communities throughout the region need a variety of housing types and sizes to retain and attract a diverse mix of households. Small housing types promote:</p>
                        <ul>
                            <li>Aging in place. Senior households tend to consist of one or two people, who are not often served by traditional large, single-family houses found in most suburban communities. Many seniors who wish to downsize have difficulty finding options within their communities, let alone options they can afford, and instead choose to remain in houses that do not meet their accessibility needs or are difficult or costly to maintain.</li>
                            <li>Choices for smaller households. As people form families later in life and have fewer children, household size shrinks. For many of these households, a suburban single-family house is too large and the associated maintenance and tax costs are too high. Increasing choices for smaller households helps stabilize the housing market and reduces competition for bigger homes suited for larger households.</li>
                            <li>Low-cost housing for younger adults. Millennials are more likely than their predecessors to live with their parents or delay starting their own families, and are more likely to carry large students debts (Pew Research Center). Providing these younger adults with lower-cost housing options helps them remain in and contribute to their local communities.</li>
                            <li>Long-term rental income for homeowners. Some small housing types, such as accessory dwelling units, can benefit primary homeowners through supplemental rental income, helping them to stay in their homes and communities.</li>
                            <li>Naturally occurring (unsubsidized) affordable housing. Smaller homes tend to come with a smaller price tag than larger single-family houses, especially when they add to a community’s housing supply instead of replacing existing stock through teardowns.</li>
                            <li>Smart growth community development. Smaller housing types are well suited to infill development in existing neighborhoods, making use of existing infrastructure and avoiding greenfield development.</li>
                            <li>Local economic development. A mix of housing options in a community brings households with diverse skills and incomes that can fill local employment opportunities and contribute to the local economy.</li>
                        </ul>
                    </article>
                    <article>
                        <SubtopicHeader title="A Few Small Questions" highlightWidth={250} />
                        {questionDivs}
                        <h1 style={{marginLeft: 30}}><a href="https://airtable.com/shrHGXjANVq5160O9/tblK6DBm0wXoIc4Un">See the full list and sources of all of the Small Questions about Living Little</a></h1>
                    </article>
                    <article>
                        <SubtopicHeader title="Project Background" highlightWidth={213} />
                        <p>Living Little provides information on alternative small housing types that are appropriate for Greater Boston’s suburban communities. The project began as a study that MAPC conducted with five towns (Foxborough, Medfield, Medway, Sherborn, and Stoughton) that were interested in exploring housing options for younger households and seniors. The first Living Little report studied smaller housing types that—unlike the large, luxury single-family homes frequently built in these communities—could serve as so-called “missing middle housing” thanks to its natural affordability compared to large homes (and depending on market forces). Additional Living Little studies are adding to this body of work by considering additional small housing types with five South Shore towns (Cohasset, Duxbury, Hingham, Norwell, and Scituate) and by taking a deeper look at cottage zoning, one of the housing types considered in the first report.</p>
                        <h1>Living Little Housing Types to <AnchorLink to={`/#select`}>Explore</AnchorLink>:</h1>
                        <ul>
                            <li>Accessory Dwelling Units</li>
                            <li>Cohousing</li>
                            <li>Cottage Housing</li>
                            <li>Courtyard Buildings</li>
                            <li>Duplexes</li>
                            <li>Fourplexes </li>
                            <li>Historic Conversions</li>
                            <li>Mixed-use </li>
                            <li>Tiny Houses and Tiny House Villages</li>
                            <li>Townhouses</li>
                            <li>Triplexes</li>
                        </ul>
                    </article>
                    <article>
                        <SubtopicHeader title="Additional Resources" highlightWidth={230} />
                        <h1>Living Little</h1>
                        <a href={report}>Living Little Report</a>
                        <br />
                        <a href="https://airtable.com/shrHGXjANVq5160O9/tblK6DBm0wXoIc4Un" target="_blank">A Few Small Questions</a>
                        <ul>
                        </ul>
                        <h1>Why We Need Housing Options</h1>
                        <a href="https://www.mapc.org/planning101/local-zoning-is-making-it-difficult-to-build-housing-around-boston-thats-raising-prices-for-everyone/" target="_blank">The State of Zoning for Multifamily Housing in Greater Boston, 2019</a>
                        <br />
                        <a href="https://metrocommon.mapc.org/reports/10" target="_blank">Crowded In and Priced Out: Why It’s so Hard to Find a Family-Sized Unit in Greater Boston</a>
                        <br />
                        <a href="https://www.sightline.org/series/legalizing-inexpensive-housing/" target="_blank">Legalizing Inexpensive Housing Series from the Sightline Institute</a>
                        <ul>
                        </ul>
                        <h1>For More Information on Small Housing Types</h1>
                        <a href="https://missingmiddlehousing.com" target="_blank">Missing Middle Housing</a>
                        <br />
                        <a href="https://www.oregon.gov/lcd/OP/Documents/SpaceEfficientHousingReport.pdf" target="_blank">Character-Compatible, Space-Efficient Housing Options For Single-Dwelling Neighborhoods (Oregon)</a>
                        <br />
                        <a href="http://www.cityofsantacruz.com/home/showdocument?id=8875" target="_blank">Accessory Dwelling Unit Manual (Santa Cruz, CA)</a>
                        <br />
                        <a href="https://bylaws.vancouver.ca/bulletin/bulletin-laneway-housing-guide.pdf" target="_blank">Laneway Housing: How-To Guide (Vancouver)</a>
                        <br />
                        <a href="https://secondunitcentersmc.org" target="_blank">Second Unit Resources Center (San Mateo County, CA)</a>
                        <ul>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
};

export default AboutPage;