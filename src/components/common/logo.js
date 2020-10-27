import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = (props) => {
  const data = useStaticQuery(graphql`
    {
      sublogo: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "logo-sub" }
      ) {
        childImageSharp {
          fixed(height: 34) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fulllogo: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "logo-full-2" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (props.type) {
    return (
      <Img fluid={data.fulllogo.childImageSharp.fluid} style={props.style} />
    )
  } else {
    return <Img fixed={data.sublogo.childImageSharp.fixed} />
  }
}

export default Logo
