import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container } from "../global"
import MailchimpForm from "../common/mailchimpform"
import Logo from "../common/logo"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "ross" }, name: { eq: "header2" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <Logo
              type="full"
              style={{ maxWidth: "300px", margin: "40px  0" }}
            />
            <Subtitle>Join Ross DiBello for Mayor of Cleveland</Subtitle>
            <h1>
              Real Democracy.
              <br />
              Right Direction.
            </h1>
            <h2>Join our team. Help us fight for a better future.</h2>

            <MailchimpForm />
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.color.background.light};
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
`
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    margin-bottom: -4.5%;

    @media (max-width: ${(props) => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${(props) => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${(props) => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 40px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
    margin-bottom: 0;
  }
`

const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 300px;
  }
`
