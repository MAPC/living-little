import React from 'react';
import PropTypes from 'prop-types';

const AboutHeader = ({siteTitle}) => {
    return (
        <div className="about-header-container">
            <div className="about-header-content main-column">
                <div className="about-header-content-link">
                    <a href="/">Return to Home</a>
                </div>
                <div className="about-header-content-title">
                    <h1>{siteTitle}</h1>
                </div>
            </div>
        </div>
    );
};

AboutHeader.propTypes = {
    siteTitle: PropTypes.string,
};
  
AboutHeader.defaultProps = {
    siteTitle: '',
};

export default AboutHeader;