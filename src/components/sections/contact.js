import React from "react"
import styled from "styled-components"

import { Section, Container, FormInput, FormButton } from "../global"
import SectionTitle from "../common/sectiontitle"

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <Section id="policy">
      <StyledContainer>
        <SectionTitle subtitle="Contact" title="Work With Us" />

        <Container flex>
          <div className="left">
            <ContactTitle>Reach Out</ContactTitle>
            <p>Let your voice be heard. Send us a message.</p>

            <ContactForm onSubmit={handleSubmit}>
              <FormInput placeholder="Your email" type="email" />
              <FormInput type="text" placeholder="Your message" />
              <FormButton>Send Mail</FormButton>
            </ContactForm>
          </div>

          <div className="right">
            <ContactTitle>Stay Informed</ContactTitle>
            <p>Follow Ross on social media.</p>
            <p>[Insert Social Media links here]</p>
          </div>
        </Container>
      </StyledContainer>
    </Section>
  )
}
export default Contact

const StyledContainer = styled(Container)``

const ContactTitle = styled.h4`
  margin-bottom: 10px;
`

const ContactForm = styled.form`
  input {
    margin-bottom: 20px;
  }
  button {
    margin: 0px;
  }
`
