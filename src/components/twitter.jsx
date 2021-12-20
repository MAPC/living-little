import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import ShareLink from 'react-twitter-share-link';

const Twitter = ({typology}) => {
  
  const tweetText = {
    adu: "A smaller apartment on the same lot as a larger main house.",
    cottage: "A pedestrian-friendly cluster of one- to two-story houses with shared green spaces.",
    tinyhouse: "A house smaller than 500 square feet, on wheels or a foundation, usually with a high-pitched ceiling and a porch.",
    townhouse: "A narrow, multi-level home with an individual entry that shares a common side wall(s) with another dwelling.",
    sfc: "A single-family house that has been converted into two or more housing units, typically with few or no changes to the exterior.",
    mixeduse: "One to three floors of housing located above ground floor retail with parking located behind or below the building.",
    cohousing: "An intentionally-designed community of private residences and shared public open and common spaces. Cohousing can take many forms, including single family, duplexes, townhouses, cottages, or a combination of several housing types."
  }

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
    <ShareLink text={tweetText[typology]} link={deepDiveUrl[typology]}>
      {link => (
          <a href={link} target='_blank'>    
            <FontAwesomeIcon icon={faTwitter} className="social-sharing__icon social-sharing__icon--twitter" />
          </a>
      )}
    </ShareLink>
)};

export default Twitter;
