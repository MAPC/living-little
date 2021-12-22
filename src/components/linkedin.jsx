import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ShareLink from 'react-linkedin-share-link';

const Linkedin = ({typology}) => {
  
  const deepDiveUrl = {
    adu: "https://living-little.mapc.org/adu#select",
    cottage: "https://living-little.mapc.org/cottage/#select",
    tinyhouse: "https://living-little.mapc.org/tinyhouse#select",
    townhouse: "https://living-little.mapc.org/townhouse#select",
    sfc: "https://living-little.mapc.org/sfc#select",
    mixeduse: "https://living-little.mapc.org/mixeduse#select",
    cohousing: "https://living-little.mapc.org/cohousing#select"
  };
  
  return (
    <ShareLink link={deepDiveUrl[typology]}>
      {link => (
          <a href={link} target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} className="social-sharing__icon social-sharing__icon--facebook" />
          </a>
      )}
    </ShareLink>
)};

export default Linkedin;
