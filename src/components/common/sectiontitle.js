import React from "react"
import styled from "styled-components"

const SectionTitle = (props) => (
  <div>
    <Subtitle>{props.subtitle}</Subtitle>
    <Title>{props.title}</Title>
  </div>
)

export default SectionTitle

const Title = styled.h3`
  color: ${(props) => props.theme.color.primary};
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`
