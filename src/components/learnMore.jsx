import React from 'react';
import CallToAction from './callToAction';
import report from '../content/SS_LL_Report_Final.pdf'


const LearnMore = () => (
  <section className="section main-column">
    <p className="learn-more__text">Dig deeper into Living Little with these additional resources:</p>
    <div className="learn-more__row">
      <CallToAction title="About Living Little" description="Learn more about why Living Little is important" resource="/about" />
      <CallToAction title="Original Living Little Report" description="Detached accessory dwelling units, cottage development, and tiny houses" resource={report} />
      <CallToAction title="A Few Small Questions" description="Print all of the Small Questions about Living Little" resource="https://airtable.com/shrHGXjANVq5160O9/tblK6DBm0wXoIc4Un" />
      <CallToAction title="Second Living Little Report" description="Small-scale mixed use, townhouses, single-family conversions, and cohousing" resource={report} />
    </div>
  </section>
);

export default LearnMore;
