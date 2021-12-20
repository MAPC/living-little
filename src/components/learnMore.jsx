import React from 'react';
import CallToAction from './callToAction';
import report from '../content/report.pdf'

const LearnMore = () => (
  <section className="section main-column">
    <p className="learn-more__text">Dig deeper into Living Little with these additional resources:</p>
    <div className="learn-more__row">
      <CallToAction title="About Living Little" description="Read the project background" resource="/living-little/about/" />
      <CallToAction title="Full Report" description="Read the original Living Little report" resource={report} />
      <CallToAction title="A Few Small Questions" description="Print all of the Small Questions about Living Little" resource="https://airtable.com/app04NjSVnA15ZAJN/tblK6DBm0wXoIc4Un/viwD13tLI0t9kWMbR?blocks=hide" />
      <CallToAction title="Case Studies" description="Take a closer look at all of our case studies" resource={report} />
    </div>
  </section>
);

export default LearnMore;
