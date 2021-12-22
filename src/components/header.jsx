import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => {
  return (
    <div>
      <a href="/">
        <div className="header-container">
          <div className="col-1"></div>
          <div className="col-2">
          </div>
          <div className="col-2-half">
            <div className="col-2-half-copy">
              <p>MAPC presents</p>
              <h1>{siteTitle}</h1>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </a>
      <section className="section">
        <div className="main-column header-intro">
          <h2 style={{fontWeight: "400"}}>Living Little explores different types of small housing that would be well-suited for suburban communities throughout Greater Boston, where larger homes are more common. Smaller housing can provide options for a variety of smaller households—from millennials just starting out to baby boomers looking to downsize—helping towns meet need, retain household diversity, and take a “little” step towards addressing the region’s housing crisis.</h2>
          <a href="/about"><h3>Read more about Living Little.</h3></a>
        </div>
      </section>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
