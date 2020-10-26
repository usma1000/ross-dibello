import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${(props) => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${(props) => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${(props) => props.theme.screen.md}) {
    max-width: 960px;
    ${(props) => (props.flex ? "flex-direction: row;" : "")}
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${(props) =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};

  ${(props) =>
    props.flex ? "display: flex;flex-direction: column;" : "display: block;"}

  .left {
    margin-right: 20px;
    margin-bottom: 20px;
    @media (max-width: ${(props) => props.theme.screen.md}) {
      margin-right: 0;
    }
  }

  .right {
    margin-left: 20px;
    margin-bottom: 20px;
    @media (max-width: ${(props) => props.theme.screen.md}) {
      margin-left: 0;
    }
  }
`

export const Section = styled.section`
  margin: 40px 0;
  padding: 40px 0;
  overflow: hidden;
  background-color: ${(props) => {
    switch (props.accent) {
      case "secondary":
        return props.theme.color.background.light
      case "main":
        return props.theme.color.primary
      default:
        return "white"
    }
  }};

  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding: 80px 0;
  }

  ${(props) =>
    props.accent &&
    `background-color: ${
      props.accent === "secondary"
        ? props.theme.color.background.light
        : props.theme.color.primary
    }`};
`

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

export const FormInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${(props) => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

export const FormButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${(props) => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
