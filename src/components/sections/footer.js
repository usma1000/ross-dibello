import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { Container } from "../global"
import SubLogo from "../common/logo"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterContainer flex>
      <SubLogo />

      <Text>Paid for by Committee to Elect Ross DiBello</Text>
      <div>
        <SocialIcon
          href="https://twitter.com/Rossitron5"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </SocialIcon>
        <SocialIcon
          href="https://www.facebook.com/RossDiBelloMayorOfCleveland"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </SocialIcon>
        <SocialIcon
          href="https://www.instagram.com/ross_dibello_cle/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/ross-dibello-78744039/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </SocialIcon>
      </div>
    </FooterContainer>
  </FooterWrapper>
)

const FooterContainer = styled(Container)`
  align-items: center;
`

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const Text = styled.div`
  flex-grow: 1;
  text-align: center;
`

const SocialIcon = styled.a`
  display: inline-block;
  margin-right: 20px;
  max-width: 16px;
  color: ${(props) => props.theme.color.black.regular};

  &:hover {
    color: ${(props) => props.theme.color.secondary};
  }
`

export default Footer
