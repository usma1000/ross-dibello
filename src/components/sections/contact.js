import React from "react"
import styled from "styled-components"

import { Section, Container, FormInput, FormButton, TextArea } from "../global"
import SectionTitle from "../common/sectiontitle"
import Logo from "../common/logo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitterSquare,
  faFacebookSquare,
  faLinkedin,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <Section id="contact">
      <StyledContainer>
        <SectionTitle subtitle="Contact" title="Work With Us" />

        <Container flex>
          <div className="left">
            <ContactTitle>Reach Out</ContactTitle>
            <p>Let your voice be heard. Send us a message.</p>

            <ContactForm onSubmit={handleSubmit}>
              <FormInput placeholder="Your email" type="email" />
              <TextArea placeholder="Your message" />
              <FormButton>Send Mail</FormButton>
            </ContactForm>
          </div>

          <div className="right">
            <Logo type="full" style={{ maxWidth: "300px", margin: "0 auto" }} />
            <ContactTitle>Stay Informed</ContactTitle>
            <p>Follow Ross on social media.</p>
            <SocialIcon
              href="https://twitter.com/Rossitron5"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
            </SocialIcon>
            <SocialIcon
              href="https://www.facebook.com/RossDiBelloMayorOfCleveland"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/ross_dibello_cle/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagramSquare} />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/ross-dibello-78744039/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialIcon>
          </div>
        </Container>
      </StyledContainer>
    </Section>
  )
}
export default Contact

const StyledContainer = styled(Container)`
  div.left {
    flex: 2;
    background-color: ${(props) => props.theme.color.white.dark};
    border: 1px solid ${(props) => props.theme.color.accent};
    padding: 0 20px 40px 20px;
  }
  div.right {
    flex: 1;
    text-align: center;

    h4 {
      margin-top: 0;
    }
  }
`

const ContactTitle = styled.h4`
  margin-bottom: 10px;
`

const ContactForm = styled.form`
  input,
  textarea {
    margin-bottom: 20px;
  }
  button {
    margin: 0px;
  }
`

const SocialIcon = styled.a`
  display: inline-block;
  ${(props) => props.theme.font_size.larger};
  color: ${(props) => props.theme.color.accent};
  margin-right: 20px;
`
