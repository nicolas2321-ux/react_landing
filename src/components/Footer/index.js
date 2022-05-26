import React from 'react'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterContainer, FooterP,FooterInstagram, FooterFacebook, FooterTwitter } from './FooterElements';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <FooterContainer>
         <FooterP>2022 GoQuizz. All rights reserved</FooterP>
        <FooterInstagram>
        <FontAwesomeIcon icon={faInstagram} id="instagram"/>
        </FooterInstagram>
        <FooterFacebook>
        <FontAwesomeIcon icon={faFacebook} id="instagram"/>
        </FooterFacebook>
        <FooterTwitter>
        <FontAwesomeIcon icon={faTwitter} id="instagram"/></FooterTwitter>`
    </FooterContainer>
  )
}

export default Footer