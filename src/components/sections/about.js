import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Section, Container } from "../global"
import SectionTitle from "../common/sectiontitle"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "ross" }, name: { eq: "about" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section id="about">
      <SectionTitle subtitle="About" title="Insert Title Here" />
      <Container flex>
        <ImageWrapper>
          <StyledImage fluid={data.file.childImageSharp.fluid} />
          <ImageCaption>
            Check out a snapshot of my professional career{" "}
            <a
              href="https://www.linkedin.com/in/ross-dibello-78744039/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </ImageCaption>
        </ImageWrapper>
        <div>
          <p>
            I have lived in West Park near Kamms Corner with my wife Lauren and
            our CityDog “Baby,” for two years now. I love my neighbors, the
            local watering holes, the pizza joints, Rubin’s Family Restaurant &
            Deli, The Hooley, the fish fry at St. Mary’s and too much more to
            list here. (My wife especially loves Five Points Coffee & Tea.)
            Before that, I spent six years living in Downtown Cleveland, at both
            the Bingham Lofts and Bridgeview Apartments on West 9th Street.
          </p>
          <p>
            Though much of my family resides in Little Italy, I grew up in
            Chesterland, Ohio and attended Notre Dame Cathedral Latin High
            School in Chardon. In 2005, I graduated from THE Ohio State
            University with Bachelor’s Degrees in Communications and Psychology.
            I graduated from Cleveland-Marshall College of Law at Cleveland
            State University in 2008 and was subsequently admitted to the Ohio
            Bar.
          </p>
          <p>
            Almost my entire professional life (2009-2020) has been spent in
            service to the Honorable Judge Cassandra Collier-Williams. I started
            as a receptionist/law-clerk/lawyer at The Law Offices of Cassandra
            Collier-Williams, LLC, and assisted on her two judicial campaigns in
            2010 and 2012. I visited all 59 municipalities in Cuyahoga County,
            and all 17 Wards in Cleveland, meeting people on the judge’s behalf
            and talking with them about the community, the judge’s campaign and
            what a common pleas judge does.
          </p>
          <p>
            I know the struggles that hard working Clevelanders face. During
            this time, I faced worry from debt as I worked two full-time jobs
            for close to minimum wage. Then, after a victorious 2012 campaign, I
            received the honor of serving as Judge Collier-Williams’s staff
            attorney at the Court of Common Pleas until through April of 2020
            when, due to family concerns and coronavirus, I had to make the
            difficult choice to pursue freelance legal work while confined to my
            home.
          </p>
          <p>
            I love games. My whole life, if I found a game that interested me, I
            worked until I knew that game inside and out. Before my legal career
            and throughout law school, I paid the bills as a professional poker
            player and even made it to the World Series of Poker Main Event in
            2009. Also, as a lifelong, die hard Cleveland and Ohio State sports
            fan, I’ve been a season ticket holder for every team at one point or
            another.
          </p>
          <p>
            If Cleveland takes a chance on me, I promise I’ll work tirelessly to
            find a solution to every challenge we face, starting with how we
            make Cleveland schools the envy of every other system in Northeast
            Ohio.
          </p>

          <Affiliations>
            <AffiliationsTitle>Memberships/Affiliations:</AffiliationsTitle>
            <ul>
              <li>Lifelong Democrat</li>
              <li>
                2019 graduate of the Cleveland Metropolitan Bar Association
                Leadership Academy
              </li>
              <li>Cleveland Wards 11 and 17 Democratic Club</li>
              <li>Cleveland Professional Twenty-Thirty Club</li>
              <li>
                The Ohio State University Alumni Club of Greater Cleveland
              </li>
              <li>Westshore Bar Association</li>
              <li>Justinian Forum</li>
              <li>City Dogs Volunteer (and Adopter)</li>
            </ul>
          </Affiliations>
        </div>
      </Container>
    </Section>
  )
}

export default About

const ImageWrapper = styled.div`
  margin-right: 40px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-right: 0;
  }
`

const ImageCaption = styled.div`
  background: ${(props) => props.theme.color.white.dark};
  padding: 17px;
  font-style: italic;
  ${(props) => props.theme.font_size.xxsmall}
  margin-bottom: 40px;
`

const StyledImage = styled(Img)`
  width: 400px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 100%;
  }
`
const Affiliations = styled.div`
  background-color: ${(props) => props.theme.color.white.dark};
  border: 1px solid ${(props) => props.theme.color.accent};
  padding: 20px;
  margin-top: 40px;
`

const AffiliationsTitle = styled.h3`
  margin: 0;
  ${(props) => props.theme.font_size.large}
`
