import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import ShareLink from 'react-twitter-share-link';
import definitions from '../content/definitions.json';

const Twitter = ({typology}) => {
  
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
    <ShareLink text={definitions[typology]} link={deepDiveUrl[typology]}>
      {link => (
          <a href={link} target='_blank'>    
            <FontAwesomeIcon icon={faTwitter} className="social-sharing__icon social-sharing__icon--twitter" />
          </a>
      )}
    </ShareLink>
)};

export default Twitter;
