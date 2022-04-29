import React from 'react';
import SEO from '../components/seo';
import AboutHeader from '../components/aboutHeader';
import SubtopicHeader from '../components/subtopicHeader';
import Footer from '../components/footer';
import '../styles/about.scss';
import report from '../content/Living-Little-Full-Report.pdf';
import secondReport from '../content/SS_LL_Report_Final.pdf'
import icon from "../images/question-icon.png";
import adu from "../images/ADU18.jpg";
import sfc from "../images/Newton29.jpg";
import cottage from "../images/Chapin_1.jpg";
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const AboutPage = () => {

    const questions = [
        {
            "q": "If small housing is so great, why isn’t it getting built in my town?",
            "a": <div>The type of housing that gets built isn’t only about what people want; it’s also influenced by land costs and town regulations. Check out <a href="https://www.youtube.com/watch?v=X1qwyLmjA9s&feature=emb_imp_woyt">this video</a> to understand why small housing is sometimes difficult to build.</div>
        },
        {
            "q": "If my town builds more housing, even smaller housing, how will that impact our schools?",
            "a":  "Several Massachusetts studies have found that concerns about new housing development increasing school enrollment are not born out. In fact, a 2017 MAPC study found no correlation between housing construction and school enrollment: in communities that have seen substantial housing construction, school enrollment barely changed, and districts with the largest student increases saw very little housing production."
        },
        {
            "q": "How is that possible?",
            "a": "Most increases in school-age children are associated with turnover in the existing housing supply, not construction of new units. The majority of suburban communities in the MAPC region are seeing sustained declines in enrollment: the Commonwealth’s public school enrollment (including charter schools) peaked in 2002 and has since declined by 3%. Even in communities where substantial housing construction has occurred, any corresponding growth in households has not been enough to offset the natural demographic decline in school-age residents associated with children of Baby Boomers aging into adulthood."
        },
        {
            "q": "What about increased traffic?",
            "a": "There is no evidence that smaller housing contributes to increased traffic and parking issues. One of the main reasons is that small housing typically only makes up a sliver of most suburban communities’ housing supply, especially when compared to single-family houses. By design, suburban single-family houses encourage households to own more than one vehicle due to their scale and availability of off-street parking. Meanwhile, smaller housing options generally consist of one-to two-bedrooms with fewer parking spaces, limiting the number of people and vehicles."
        },
        {
            "q": "If smaller housing is built in my neighborhood, won’t my property value go down?",
            "a": "Data on how Living Little typologies affect property prices is still limited, but studies show that smart growth policies—which favor compact, well-planned development and walkability—have become highly desirable and may actually increase property values."
        },
        {
            "q": "Won’t these different types of housing stick out like a sore thumb?",
            "a": "Zoning bylaws can be written to ensure new housing is respectful of existing architectural design. Town officials can add language that ensures new Living Little housing complements the neighborhood, and can require developers to undergo a design review process. Town officials can also provide design guidelines or create form-based codes to foster high-quality, predictable development."
        },
        {
            "q": "I don’t want my town to be overrun with people!",
            "a": "Small housing can fill a gap in the housing stock, but there is no evidence to indicate it leads to overcrowded communities. Factors such as land availability, zoning, market preferences, and development costs limit the potential for widespread smaller housing development and therefore its impact on a community. The nature of Living Little typologies and their incremental, small-scale development largely prevents them from spurring dramatic neighborhood change."
        }
    ]

    const questionDivs = questions.map((elem) => 
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
                        <div className="about-images">
                            <div className="about-image">
                                <img src={adu} />
                            </div>
                            <div className="about-image">
                                <img src={sfc} />
                            </div>
                            <div className="about-image">
                                <img src={cottage} />
                            </div>
                        </div>
                        <p>Photo Credits (left to right): Alex Koppelman, Alex Koppelman, Flickr user <a href="https://www.flickr.com/photos/studio-d/13627001/in/album-154825/">Karen Delucas</a></p>
                        <p>Communities throughout the region need a variety of housing types and sizes to retain and attract a diverse mix of households. Small housing types promote:</p>
                        <ul>
                            <li><span style={{color: "#49849D", fontWeight: 600}}>Aging in place.</span> Senior households tend to consist of one or two people, who are not often served by traditional large, single-family houses found in most suburban communities. Many seniors who wish to downsize have difficulty finding options within their communities, let alone options they can afford, and instead choose to remain in houses that do not meet their accessibility needs or are difficult or costly to maintain.</li>
                            <li><span style={{color: "#49849D", fontWeight: 600}}>Choices for smaller households.</span> As people form families later in life and have fewer children, household size shrinks. For many of these households, a suburban single-family house is too large and the associated maintenance and tax costs are too high. Increasing choices for smaller households helps stabilize the housing market and reduces competition for bigger homes suited for larger households.</li>
                            <li><span style={{color: "#49849D", fontWeight: 600}}>Low-cost housing for younger adults.</span> Millennials are more likely than their predecessors to live with their parents or delay starting their own families, and are more likely to carry large students debts (Pew Research Center). Providing these younger adults with lower-cost housing options helps them remain in and contribute to their local communities.</li>
                            <li><span style={{color: "#49849D", fontWeight: 600}}>Long-term rental income for homeowners.</span> Some small housing types, such as accessory dwelling units, can benefit primary homeowners through supplemental rental income, helping them to stay in their homes and communities.</li>
                            <li><span style={{color: "#49849D", fontWeight: 600}}>Naturally occurring (unsubsidized) affordable housing.</span> Smaller homes tend to come with a smaller price tag than larger single-family houses, especially when they add to a community’s housing supply instead of replacing existing stock through teardowns.</li>
                            <li><span style={{color: "#49849D", fontWeight: 600}}>Smart growth community development.</span> Smaller housing types are well suited to infill development in existing neighborhoods, making use of existing infrastructure and avoiding greenfield development.</li>
                            <li><span style={{color: "#49849D", fontWeight: 600}}>Local economic development.</span> A mix of housing options in a community brings households with diverse skills and incomes that can fill local employment opportunities and contribute to the local economy.</li>
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
                        <a href={report}>Original Living Little Report: Detached accessory dwelling units, cottage development, and tiny houses</a>
                        <br />
                        <a href={secondReport}>Second Living Little Report: Small-scale mixed use, townhouses, single-family conversions, and cohousing</a>
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