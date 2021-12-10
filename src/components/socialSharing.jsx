import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebook, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import Twitter from './twitter';
import Facebook from './facebook';
import Linkedin from './linkedin';
import DeepDivePdf from './deepDivePdf';

const SocialSharing = ({typology}) => {
  
  return (
  <div className="social-sharing__wrapper">
    <Twitter typology={typology} />
    <Facebook typology={typology} />
    <Linkedin typology={typology} />
    <DeepDivePdf typology={typology} />
  </div>
)};

export default SocialSharing;
