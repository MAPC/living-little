import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ShareLink from 'react-linkedin-share-link';

const Linkedin = ({typology}) => {
  
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
    <ShareLink link={deepDiveUrl[typology]}>
      {link => (
          <a href={link} target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} className="social-sharing__icon social-sharing__icon--facebook" />
          </a>
      )}
    </ShareLink>
)};

export default Linkedin;
