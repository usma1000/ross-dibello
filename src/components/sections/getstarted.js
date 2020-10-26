import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

const GetStarted = () => (
  <StyledSection>
    <GetStartedContainer>
      <GetStartedTitle>Be a part of the movement</GetStartedTitle>
      <TryItButton
        href="https://secure.actblue.com/donate/dibelloforcle"
        target="_blank"
        rel="noreferrer"
      >
        Donate
      </TryItButton>
    </GetStartedContainer>
  </StyledSection>
)

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${(props) => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
  color: ${(props) => props.theme.color.secondary};
`

const TryItButton = styled.a`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${(props) => props.theme.color.secondary};
  border-radius: 4px;
  padding: 20px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  text-decoration: none;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.5) 0px 2px 10px 0px;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
