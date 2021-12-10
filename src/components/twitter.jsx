import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import ShareLink from 'react-twitter-share-link';

const Twitter = ({typology}) => {
  
  const deepDiveUrl = {
    adu: "https://mapc.github.io/living-little/adu#select",
    cottage: "https://mapc.github.io/living-little/cottage/#select",
    tinyhouse: "https://mapc.github.io/living-little/tinyhouse#select",
    townhouse: "https://mapc.github.io/living-little/townhouse#select",
    sfc: "https://mapc.github.io/living-little/sfc#select",
    mixeduse: "https://mapc.github.io/living-little/mixeduse#select",
    cohousing: "https://mapc.github.io/living-little/cohousing#select"
  };
  
  return (
  <div className="social-sharing__wrapper">
    <ShareLink link={deepDiveUrl[typology]}>
      {link => (
          <a href={link} target='_blank'>    
            <FontAwesomeIcon icon={faTwitter} className="social-sharing__icon social-sharing__icon--twitter" />
          </a>
      )}
    </ShareLink>
  </div>
)};

export default Twitter;
